<template>
  <div>
    <img src="../assets/images/cad.png" style="width: 100%;">
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>