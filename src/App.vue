<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { SET_PERSON, SET_TURELOCK } from '@/api/config.js'
export default {
  created(){
    let islock = localStorage.getItem(SET_TURELOCK)
    if(islock){
      this.$router.push('/gesturelock')
    }
  }
}
</script>

