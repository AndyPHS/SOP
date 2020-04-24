<template>
  <div class="youshi">
    <div class="youshi_min">
      <img src="../../../static/image/common/youshi_banner.png" alt="">
      <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
        <span>每一项有事都是保障胜诉的关键，免费预约面谈</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'YouShi',
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
  .youshi{
    width:100%;
    background:url(../../../static/image/common/youshi_bg.png)no-repeat;
    background-size: 100% 100%;
    padding-bottom: 50px;
    .youshi_min{
      width: 1080px;
      margin: 0 auto;
      padding-top:50px;
      img{
        display: block;
        padding-bottom: 40px;
      }
      a{
        display: inline-block;
        width: 100%;
        margin:0 auto;
        span{
          width:422px;
          display: block;
          height: 45px;
          line-height: 45px;
          margin:0 auto;
          cursor: pointer;
          text-align: center;
          border-radius: 23px;
          color: #fff;
          font-size: 18px;
          background:url(../../../static/image/common/youshi_btn_bg.png)no-repeat;
        }
      }

    }
  }
</style>
