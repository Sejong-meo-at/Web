<template>
  <div>
    <div>
      <router-view name="topBar"></router-view>
      <div class = "bar">
        <router-link to = '/login'>로그인</router-link>
        <router-link to = '/register'>회원가입</router-link>
        <router-link to = '/main'>게시판</router-link>
        <router-link to = '/translation'>번역</router-link>
        <router-link to = '/notice'>단어추가</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import axios from 'axios'
// import XLSX from 'xlsx'
// 게시판, 로그인, 회원가입, 번역
export default {
  name: 'topBar'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  position: absolute;
  width: 100%;
  top : 14vh;
  height: 8.4vh;
  background: #F78181;
  display: flex;
}
a {
  color : #fff;
  width:20vw;
  text-align: center;
  font-weight: bold;
  font-size: 2.5vh;
  line-height: 8.4vh;
}
</style>
