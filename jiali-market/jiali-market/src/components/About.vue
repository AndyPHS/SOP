<template>
  <div class="about">
    <head-nav></head-nav>
    <div class="banner">
      <div class="banner_min">
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
          <img src="../../static/image/about/banner_about.png" alt="">
        </a>
      </div>
    </div>
    <ad></ad>
    <div class="part1">
      <div class="part1_min">
        <ul>
          <li>
            <img src="../../static/image/about/part1.png" alt="">
          </li>
        </ul>
      </div>
      <div class="bottom">
        <el-carousel indicator-position="outside" height="193px" width="1080px">
          <el-carousel-item v-for="(item, index) in swiperAll" :key="index" class="bot_con">
            <ul>
              <li v-for="($item, $index) in item" :key="$index">
                <img :src="$item" alt="">
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="getmore">
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
          <img src="../../static/image/common/getmore_btn.png" alt="">
        </a>
      </div>
    </div>
    <div class="part2">
      <div class="part2_min">
        <ul>
          <li>
            <a href="http://p.qiao.baidu.com/cps/chat?siteId=10708789&userId=20543964">
              <img src="../../static/image/about/part2.png" alt="">
            </a>
          </li>
        </ul>
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
    name: 'About',
    components:{
      HeadNav,
      Ad,
      BottomPart,
      RongYu,
      YouShi
    },
    data () {
      return {
        swiperAll:[
          [
            './static/image/about/swiper01.png',
            './static/image/about/swiper02.png',
            './static/image/about/swiper03.png',
            './static/image/about/swiper04.png'
          ],
          [
            './static/image/about/swiper05.png',
            './static/image/about/swiper06.png',
            './static/image/about/swiper07.png',
            './static/image/about/swiper08.png'
          ],
          [
            './static/image/about/swiper09.png',
            './static/image/about/swiper10.png',
            './static/image/about/swiper11.png',
            './static/image/about/swiper12.png'
          ],
        ]
      }
    },
    methods:{
    }
  }
</script>
<style  scoped lang="scss" type="text/css">
.router-link-exact-active{
  color: #f65622;
  text-decoration: underline;
  text-underline: #f65622;
}
.about{
  .banner{
    width: 100%;
    background: url(../../static/image/about/banner_about_bg.jpg)no-repeat;
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
          img{
            display: block;
          }
        }
      }
    }
    .bottom{
      width: 1080px;
      margin:0 auto;
      .bot_con{
        width: 1080px;
        margin:0 auto;
        ul{
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .getmore{
      width: 100%;
      text-align: center;
      padding-bottom: 35px;
      a{
        display: inline-block;
        margin-top:14px;
        img{
          display: block;
        }
      }
    }
  }
  .part2{
    width: 100%;
    background-color: #f8f8f8;
    .part2_min{
      width: 1080px;
      margin:0 auto;
      padding-top: 35px;
      text-align: center;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          a{
            img{
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
