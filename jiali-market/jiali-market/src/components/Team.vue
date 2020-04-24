<template>
  <div class="team">
    <head-nav></head-nav>
    <div class="banner">
      <div class="banner_min">
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
          <img src="../../static/image/team/banner_team.png" alt="">
        </a>
      </div>
    </div>
    <ad></ad>
    <div class="part1">
      <div class="part1_min">
        <ul>
          <li>
            <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
              <img src="../../static/image/team/part1.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="part2">
      <div class="part2_min">
        <ul>
          <li>
            <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
              <img src="../../static/image/team/part2.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="part3">
      <div class="part3_min">
        <ul>
          <li>
            <img src="../../static/image/common/lawyer_yangshuai.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_humengdie.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_jiangchunmei.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_masainan.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_caoziyan.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_jinzengyu.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_miaolili.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_xuqian.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_zhangping.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_wuyingjie.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_wuyanming.png" alt="">
          </li>
          <li>
            <img src="../../static/image/common/lawyer_mahongxia.png" alt="">
          </li>
        </ul>
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
          <img src="../../static/image/common/getmore_btn.png" alt="">
        </a>
      </div>
    </div>
    <you-shi></you-shi>
    <rong-yu></rong-yu>
    <bottom-part></bottom-part>
  </div>
</template>

<script>
  import HeadNav from '@/components/common/HeadNav.vue'
  import Ad from '@/components/common/Ad.vue'
  import BottomPart from '@/components/common/BottomPart.vue'
  import RongYu from '@/components/common/RongYu.vue'
  import YouShi from '@/components/common/YouShi.vue'
  export default {
    name: 'Team',
    components:{
      HeadNav,
      Ad,
      BottomPart,
      RongYu,
      YouShi
    },
    data () {
      return {

      }
    },
    methods:{
    }
  }
</script>
<style scoped lang="scss" type="text/css">
.team{
  .banner{
    width: 100%;
    background: url(../../static/image/team/banner_team_bg.jpg)no-repeat;
    background-size:100% 100%;
    .banner_min{
      width: 1080px;
      margin:0 auto;
      padding-top: 100px;
      padding-bottom: 170px;
      a{
        img{
          display: block;
        }
      }
    }
  }
  .part1{
    width: 100%;
    background-color: #ececec;
    .part1_min{
      width: 1080px;
      margin:0 auto;
      padding-top: 35px;
      padding-bottom: 35px;
      text-align: center;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          a{
            display: block;
            img{
              display: block;
            }
          }
        }
      }
    }
  }
  .part2{
    width: 100%;
    background:url(../../static/image/team/part2_bg.png)no-repeat;
    background-size: cover;
    .part2_min{
      width: 1080px;
      margin:0 auto;
      padding-top: 35px;
      padding-bottom: 35px;
      text-align: center;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          margin: 0 auto;
          a{
            display: block;
            img{
              display: block;
            }
          }
        }
      }
    }
  }
  .part3{
    width: 100%;
    background-color: #fff;
    .part3_min{
      width: 1080px;
      margin:0 auto;
      padding-bottom: 35px;
      padding-top: 35px;
      text-align: center;
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
          margin-bottom:20px;
          img{
            display: block;
          }
        }
      }
      a{
        display: inline-block;
        margin-top: 24px;
        img{
          display: block;
          margin:0 auto;
        }
      }
    }
  }
}

</style>
