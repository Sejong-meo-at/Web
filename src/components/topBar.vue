<template>
  <div>
    <div>
      <router-view name="topBar"></router-view>
      <div class = "bar">

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
}
</style>
