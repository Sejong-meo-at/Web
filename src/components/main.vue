<template>
  <div>
    <div>
      <div class = "loginBox">
        <input v-model = "id" type="id" placeholder="ID" class = "inputID"/><br/>
        <input v-model = "pw" type="password" placeholder="Passwd" class = "inputPW"/>
        <div class = "loginBtn" v-on:click="login">LOGIN</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
// import XLSX from 'xlsx'

export default {
  name: 'main',
  methods: {
    async login () {
      console.log(this.id + ' ' + this.pw)
      let result = await axios.post('/', {
        id: this.id,
        passwd: this.pw
      }).catch((response)=>{
        alert('아이디나 비밀번호가 틀렸습니다!')
        return 0;
      })
      if(result.status == 200)
        alert('로그인 성공!')
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
  width: 10vw;
  height: 50vh;
  margin : auto;
  margin-top: 40vh;
}
.inputID, .inputPW{
  width: 10vw;
  margin-bottom: 0.5vh;
  border: 0px;
}
.loginBtn {
  text-align: center;
  width: 10vw;
  background: #F78181;
  /* border: 1px solid #F78181; */
}
</style>
