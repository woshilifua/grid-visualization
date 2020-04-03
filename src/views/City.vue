/* eslint-disable no-undef */
<template>
  <div class="home">
    <City />
    <CheckBox class="check-box" />
  </div>
</template>

<script>
import City from './components/city'
import CheckBox from './components/checkbox'

export default {
  components: {
    City,
    CheckBox
  }
}
</script>
<style scoped>
.home {
  position: relative;
}
.check-box {
  position: absolute;
  left: 12px;
  top: 12px;
  width: 320px;
}
</style>