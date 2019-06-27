<template>
  <div class="hello">
    <ul >
      <li v-for="(item,i) in listData" key="i">
        {{item.content}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data () {
    return {
      listData: []
    }
  },
  methods:{
    getList(){
      this.axios({
        method: 'get',
        url: `/api/blog/list`
      }).then(res=>{
        this.listData=res.data.data
        console.log(111,this.listData)

      })
    }
  },
  mounted(){
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
