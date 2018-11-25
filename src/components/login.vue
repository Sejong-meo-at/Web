<template>
  <div>
    <div>
      <div class = "loginBox">
        <input v-model = "id" type="id" placeholder="ID" class = "inputID"/><br/>
        <input v-model = "pw" type="password" placeholder="Passwd" class = "inputPW"/>
        <div class = "loginBtn" v-on:click="login"><b>LOGIN</b></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
// import XLSX from 'xlsx'

export default {
  name: 'login',
  methods: {
    async login () {
      console.log(this.id + ' ' + this.pw)
      let result = await axios.post('/', {
        id: this.id,
        passwd: this.pw
      }).catch((response)=>{
        alert('아이디나 비밀번호가 틀렸습니다!')
        // return 0;
      })
      if(result.status == 200) {
        location.replace('/main');
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
  margin-top: 40vh;
}
.inputID, .inputPW{
  box-sizing: border-box;
  width: 30vw;
  height: 4vh;
  margin-bottom: 1vh;
  border: 0px;
  font-size: 2.5vh;
  color: #000;
  border: 0.2vh solid #F78181;
}

.loginBtn {
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
