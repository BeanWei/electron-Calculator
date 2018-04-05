<template>
  <div id="btn" @click="getKeyValue($event)">{{keyValue}}</div>
</template>

<script>
export default {
  props: ['keyValue'],
  methods: {
    getKeyValue (event) {
      let value = event.target.innerHTML
      this.$store.commit('calculate', value)
    }
  }
}
</script>

<style scoped>
  #btn {
    float: left;
  }
</style>

