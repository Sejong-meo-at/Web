<template>
  <div>
    <div class = "box">
      <div class = "beforeBox">
        <p class = "text">신조어</p>
        <div class = "before">
          <textarea v-model = "before"></textarea>
        </div>
      </div>
      <div v-on:click="trans" class = "transBtn">번역</div>
      <div class = "afterBox">
        <p class = "text">표준어</p>
        <div class = "after">
          <textarea v-model = "after" readonly></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
// import XLSX from 'xlsx'
// 게시판, 로그인, 회원가입, 번역
import api from './apiurl.json'

export default {
  name: 'trans',
  data () {
    return {
      after : ""
    }
  },
  methods: {
    async trans () {
      let url = api.url + '/change'
      let result = await axios.post(url, {
        str: this.before
      }).catch((response)=>{
        alert('실패!')
      })
      if(result.status == 200) {
        this.after = result.data;
        console.log(result.data)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 74vw;
  margin: auto;
  margin-top: 30vh;
  display: flex;
}
.before {
  margin-right: 4vw;
}
.transBtn {
  width: 6vw;
  height: 5vh;
  margin-right: 4vw;
  margin-top: 22.5vh;
  text-align: center;
  font-size: 2.5vh;
  color:#fff;
  line-height: 5vh;
  background: #F78181;
}
.before, .after{
  width: 30vw;
  height: 40vh;
  background-color: #F78181;
  padding: 1vh;
}
textarea {
  width: calc(30vw - 1vh);
  height: 39vh;
  background: #F78181;
  border: 0;
  font-size: 2.5vh;
  color: #fff;
}
.text {
  height: 1.5vh;
  width: 30vw;
  font-size: 2.5vh;
  text-align: center;
  color: #F78181;
}
</style>
