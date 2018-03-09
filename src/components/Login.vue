<template>

    <at-card :loading="loading" :style="{ width: '300px' }" :bordered="false">
      <h4 slot="title">Login</h4>
      <!-- <div slot="extra"><a>Register</a></div> -->
      <div>
        <!-- <div class="row at-row flex-center flex-middle"> -->
        <at-input v-model="user" placeholder="User" size="large" prepend-button>
          <template slot="prepend">
            <i class="icon icon-user"></i>
          </template>
        </at-input>

        <br/>

        <at-input v-model="password" type="password" placeholder="Password" size="large" prepend-button>
          <template slot="prepend">
            <i class="icon icon-lock"></i>
          </template>
        </at-input>
        <!-- </div> -->
        <br/>
        <div class="row at-row flex-end flex-bottom">
        <at-button type="primary">Login</at-button>
        </div>
      </div>
    </at-card>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      user: '',
      password: ''
    }
  }
}
</script>
