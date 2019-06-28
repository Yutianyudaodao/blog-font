<template>
  <div>
    <div>
      username: <input v-model="username"></input><span>{{username}}</span>
    </div>
    <div>
      password: <input v-model="password"></input><span>{{password}}</span>
    </div>
    <div class="button" @click="login">提交</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
        username:'',
        password:''
    }
  },
  methods:{
    login(){
      console.log(55,this.username,this.password)
      this.axios({
        method: 'post',
        url: `/api/user/login`,
        data: {
          username:this.username,
          password:this.password
        }
      }).then(res=>{
        // this.listData=res.data.data
        const { errno } = res.data;
        if(errno === 0){
          this.$router.push('/blog/list')
        }else if(errno === -1){
          alert('登陆失败')
        }
        
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
