/* eslint-disable no-undef */
<template>
  <div class="home">
    <District />
    <CheckBox class="check-box" />
  </div>
</template>

<script>
import District from './components/district'
import CheckBox from './components/checkbox'

export default {
  components: {
    District,
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