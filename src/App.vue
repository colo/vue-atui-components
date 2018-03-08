<template>
  <div class="container" id="app">
    <div class="row" style="margin-bottom: 24px;">
      <at-menu router v-for="route in routes" theme="dark" mode="inline">
        <at-menu-item :to="{ name: route.name }">{{route.name}}</at-menu-item>
      </at-menu>
    </div>

    <!-- <div class="row at-row flex-center flex-middle"> -->


      <!-- <div class="col-md-3"> -->


           <!-- <at-button @click="handleClick">Thanks for choosing AT-UI </at-button> -->



          <router-view></router-view>
      



    </div>
  <!-- </div> -->
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
