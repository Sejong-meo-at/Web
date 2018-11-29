<template>
  <div>
    <div>
      <div class = "loginBox">
        <input v-model = "name" type = "text" placeholder="Name" class = "inputName"/>
        <input v-model = "id" type="text" placeholder="ID" class = "inputID"/><br/>
        <input v-model = "pw" type="password" placeholder="Passwd" class = "inputPW"/>
        <div class = "regBtn" v-on:click="register"><b>REGISTER</b></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
// import XLSX from 'xlsx'
import api from './apiurl.json'
export default {
  name: 'register',
  methods: {
    async register () {
      let url = api.url + '/signup'
      let result = await axios.post(url, {
        id: this.id,
        passwd: this.pw,
        name: this.name
      }).catch((response)=>{
        alert('아이디나 비밀번호가 틀렸습니다!')
        // return 0;
      })
      if(result.status == 200) {
        alert('환영합니다! 로그인 해주세요!')
        location.replace('#/login');
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  margin : 0;
}
.loginBox {
  width: 30vw;
  height: 19.2vh;
  margin : auto;
  margin-top: 36vh;
}
.inputID, .inputPW, .inputName{
  box-sizing: border-box;
  width: 30vw;
  height: 4vh;
  margin-bottom: 1vh;
  border: 0px;
  font-size: 2.5vh;
  color: #000;
  border: 0.2vh solid #F78181;
}

.regBtn {
  margin-top: 5vh;
  text-align: center;
  width: 30vw;
  height: 4vh;
  font-size: 2.5vh;
  background: #F78181;
  line-height: 4vh;
  color: #000;
  /* border: 1px solid #F78181; */
}
</style>
