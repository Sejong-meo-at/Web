<template>
  <div>
    <div>
      <ul class = "idgaf">
        <li v-for="(word, mean) in list"> {{ word }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
import api from './apiurl.json'
// import XLSX from 'xlsx'
export default {
  name: 'main',
  data () {
    return {
      list : "a"
    }
  },
  methods: {
  },
  async mounted () {
    let url = api.url + '/findall'
    let result = await axios.post(url, {
      data: "some"
    })
    console.log(result.data.list)
    let new_list = []
    for(var i = 0; result.data.list[i] != null; i++) {
      let jso = {
        word : result.data.list[i].word,
        mean : result.data.list[i].mean
      }
      new_list.push(jso)
    }
    this.list = new_list
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  margin : 0;
}
.box{
  width: 10vw;
  height: 10vh;
  background: #000;
}
.idgaf {
  margin : auto;
  text-align: center; list-style:none;
  width: 60vw;
  margin-top : 30vh;
}
li {
  width: 60vw;
  height: 7vh;
  line-height: 7vh;
  color: #fff;
  background-color: #F78181;
  font-size : 2.5vh;
  margin-bottom: 2.5vh;
}
</style>
