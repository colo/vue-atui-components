<template>
<div class="wrapper">
  <div class="at-container row" id="app">
    <div class="at-sidebar col-md-8">
      <!-- <div class="container"> -->

        <at-menu router v-for="(route, index) in routes" :key="index" mode="vertical">
          <at-menu-item :to="{ name: route.name }">{{route.name}}</at-menu-item>
        </at-menu>

    </div>
    <div class="at-markdown col-md-8 col-md-offset-4">

      <router-view></router-view>


    </div>

    <div class="at-sidebar">
        algo al final
    </div>


  </div>
  <div class="footer">
    <div class="container">
      footer
    </div>
  </div>

</div>
</template>



<script>
export default {
  // props: {
  //   router: {
  //     type: [Object],
  //      default: () => ({})
  //   },
  //
  // },
  created() {
      this.$router.options.routes.forEach(route => {
          this.routes.push({
              name: route.name,
              path: route.path
          })
      })
  },
  data () {
      return {
          routes: []
      }
  }
  // methods: {
  //   handleClick () {
  //     this.$Message('It works! We believe that you can save your time with AT-UI.')
  //   }
  // }
}
</script>

<style lang="css">
  /* .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } */
  /* .app {
    color: #2c3e50;
    text-align: center;
  }
  h1, h2 {
    font-weight: normal;
    margin: 16px 0;
  } */
</style>
