<template>
  <div class="ad">
    <div class="ad_min">
      <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
        <img src="../../../static/image/common/ad01.png" alt="">
      </a>
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
      a{
        display: inline-block;
        img{
          display: block;
        }
      }
    }
  }
</style>
