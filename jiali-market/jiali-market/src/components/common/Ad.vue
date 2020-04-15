<template>
  <div class="ad">
    <div class="ad_min">
      <img src="../../../static/image/common/ad01.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Ad',
    components:{
    },
    data () {
      return {
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang="scss">
  .ad{
    width:100%;
	background: #fff;
    .ad_min{
      width: 1080px;
      margin: 17px auto;
      img{
        display: block;
      }
    }
  }
</style>
