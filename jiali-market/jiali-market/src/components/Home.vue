<template>
  <div class="home">
    <head-nav></head-nav>
    <banner-swiper v-bind:heightNum="heightNum" v-bind:widthNum="widthNum"  v-bind:swiperList="swiperList"></banner-swiper>
    <ad></ad>
    <div class="part2">
      <div class="fangshi">
        <h2>离婚分为<span>两种方式</span></h2>
      </div>
      <div class="part2_min">
        <ul>
          <li>
            <img src="../../static/image/home/xieyilihun.png" alt="">
            <a href="">
              <img src="../../static/image/home/zixun_btn.png" alt="">
            </a>
          </li>
          <li>
            <img src="../../static/image/home/susonglihun.png" alt="">
            <a href="">
              <img src="../../static/image/home/zixun_btn.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="fangan">
      <div class="fangan_min">
        <a href="">
          <img src="../../static/image/home/fangan.png" alt="">
        </a>
      </div>
    </div>
    <lawyer></lawyer>
    <you-shi></you-shi>
    <rong-yu></rong-yu>
    <bottom-part></bottom-part>
  </div>
</template>

<script>
  import HeadNav from '@/components/common/HeadNav.vue'
  import BannerSwiper from '@/components/common/BannerSwiper.vue'
  import Ad from '@/components/common/Ad.vue'
  import BottomPart from '@/components/common/BottomPart.vue'
  import RongYu from '@/components/common/RongYu.vue'
  import YouShi from '@/components/common/YouShi.vue'
  import Lawyer from '@/components/common/Lawyer.vue'
  export default {
    name: 'Home',
    components:{
      HeadNav,
      BottomPart,
      Ad,
      RongYu,
      YouShi,
      Lawyer,
      BannerSwiper
    },
    data () {
      return {
        heightNum: '550px', // 轮播图高度
        widthNum: '1246px',
        swiperList: [ // 轮播图内容
          {
            url:"",
            img:"./static/image/common/swiper_home.png"
          },
          {
            url:"",
            img:"./static/image/common/swiper_caichan.png"
          },
          {
            url:"",
            img:"./static/image/common/swiper_zinv.png"
          },
          {
            url:"",
            img:"./static/image/common/swiper_jicheng.png"
          },
          {
            url:"",
            img:"./static/image/common/swiper_team.png"
          },
          {
            url:"",
            img:"./static/image/common/swiper_about.png"
          }
        ],
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang="scss" type="text/css">
.part2{
  width: 100%;
  background-color: #f4f4f4;
  .fangshi{
    width: 1080px;
    margin:0 auto;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-top: 43px;
    h2{
      display: flex;
      align-items: center;
      width: 273px;
      font-size: 30px;
      color:#443d4e;
      font-weight: bold;
      span{
        display: inline-block;
        color:#f65622;
        height:28px;
        line-height: 28px;
        padding-right:21px;
      }
    }
  }
  .part2_min{
    width: 1080px;
    margin:0 auto;
    padding-bottom: 55px;
    ul{
      display: flex;
      justify-content: space-between;
      li{
        width: 480px;
        >img{
          display: block;
        }
        a{
          display: block;
          img{
            display: block;
            width:160px;
            height: 43px;
            margin:0 auto;
            margin-top: -22px;
          }
        }
      }
    }
  }
}
.fangan{
  width: 100%;
  background: url(../../static/image/home/fanan_bg.png)no-repeat;
  background-size: 100% 100%;
  .fangan_min{
    width: 1080px;
    margin:0 auto;
    padding-top:54px;
    padding-bottom: 60px;
    a{
      display: block;
      img{
        display: block;
      }
    }
  }
}

</style>
