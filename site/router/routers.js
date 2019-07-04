
import menu from '../common/config/menu'

let routeMap = {}
const docsChildrenRoute = []

function getSubRoutes (group) {
  let subRoutes = []
  Object.keys(group.subRoutes).forEach(key => {
    const item = group.subRoutes[key]
    if (typeof item === 'string') {
      subRoutes.push(key)
    } else {
      subRoutes = subRoutes.concat(getSubRoutes(item))
    }
  })
  return subRoutes
}

Object.keys(menu).forEach(name => {
  getSubRoutes(menu[name]).forEach(key => {
    docsChildrenRoute.push({
      path: key,
      component: () => import(`../docs/${key}`)
    })
  })
  routeMap = {
    path: 'docs',
    component: () => import('../components/viewport.vue'),
    children: docsChildrenRoute
  }
})

export default routeMap
