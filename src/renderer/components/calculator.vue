<template>
  <div id="calculator">
    <img :src="bg" alt="">
    <div class="screen">
      <div class="enter">{{ calval }}</div>
      <div class="result">{{ !result ? 0 : result }}</div>
    </div>
    <div class="btn-list">
      <btn-list ref="btn" v-for="item in keys" :key="item" :key-value="item"></btn-list>
    </div>
  </div>
</template>

<script>
import btnList from '../components/Base/button'
import store from '../store/index.js'

export default {
  components: {
    btnList
  },
  data () {
    return {
      bg: require('../assets/bg.jpg'),
      keys: [
        'CE', '+', '-', '*',
        '7', '8', '9', '/',
        '4', '5', '6', '0',
        '1', '2', '3', '='
      ]
    }
  },
  computed: {
    result () {
      return store.state.result
    },
    calval () {
      return store.state.enter
    }
  }
}
</script>

<style scoped>
  #calculator {
    position: relative;
    height: 500px;
    width: 360px;
    font-size: 26px;
    font-weight: bold;
    color: aliceblue;
  }
  img {
    position: absolute;
    height: 500px;
    width: 360px
  }
  .screen {
    position: absolute;
    width: 93%;
    height: 130px;
    line-height: 50px;
    margin: 5px;
    /* border: 2px solid #333; */
    padding: 2px 5px;
    text-align: right;
  }
  .enter {
    word-wrap:break-word;
    height: 80px;
    line-height: 25px;
    padding-bottom: 5px;
  }
   .result {
    word-wrap:break-word;
    height: 50px;
    line-height: 25px;
  }
  .btn-list {
    position: absolute;
    bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    /* border: 2px solid #333; */
    width: 96%;
    text-align: center;
    height: 360px;
    line-height: 90px;
    font-size: 26px;
    cursor: pointer;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /*等同于1fr 1fr 1fr,此为重复的合并写法*/
    grid-template-rows: repeat(4, 1fr);
  }
</style>
