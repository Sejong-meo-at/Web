<template>
  <div>
    <div class = "inputBox"><br><br>
      <input v-model = "word" type="text" placeholder="신조어"><br><br><br>
      <input v-model = "mean" type="text" placeholder="뜻">
    </div>
    <div v-on:click="btn" class = "btn">
      등록하기
    </div> 
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
import api from './apiurl.json'

export default {
  name: 'notice',
  methods: {
    async btn(){
      let url = api.url + '/addWord'
      let result = await axios.post(url, {
        word: this.word,
        mean: this.mean
      }).catch((response)=>{
        alert('오류났어염')
      })
      if(result.status == 200)
        alert('성공!')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  margin : 0;
}
input {
  border : 0;
  width: 20vw;
  height: 5vh;
  text-align: center;
  font-size: 3vh;
}
.inputBox {
  width: 30vw;
  margin: auto;
  height: 30vh;
  margin-top: 35vh;
  background-color: #F78181;
}
.btn {
  width: 30vw;
  height: 7vh;
  background-color: #F78181;
  margin : auto;
  margin-top: 5vh;
  line-height: 7vh;
}
.inputBox, .btn{
  color: #fff;
  text-align: center;
}
</style>
