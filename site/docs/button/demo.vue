<script>
export default {
  methods: {
    click () {
      alert('the button is clicked')
    }
  },
  render () {
    return (
      <div class="demo-wrap">
        <z-button plain>primary</z-button>
        <z-button>primary</z-button>
        <div>
          <z-button inline>primary</z-button>
          <z-button inline plain>plain</z-button>
        </div>
        <z-button disabled onClick={this.click}>取消</z-button>
        <z-button icon="z-remind1" iconback onClick={this.click}>点击</z-button>
        <z-button icon="z-remind1" onClick={this.click}>点击</z-button>
        <z-button loading>加载</z-button>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.demo-wrap .z-btn {
  margin-bottom: .5em;
}
</style>
