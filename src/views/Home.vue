/* eslint-disable no-undef */
<template>
  <div class="home">
    <Map />
    <CheckBox class="check-box" />
  </div>
</template>

<script>
import Map from './components/map'
import CheckBox from './components/checkbox'

export default {
  components: {
    Map,
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