<template>
  <div class="jicheng">
    <head-nav></head-nav>
    <div class="banner">
      <div class="banner_min">
        <a href="">
          <img src="../../static/image/caichan/banner_caichan.png" alt="">
        </a>
      </div>
    </div>
    <ad></ad>
    <div class="part1">
      <div class="part1_min">
        <a href="">
          <img src="../../static/image/caichan/caichan_part1.png" alt="">
        </a>
      </div>
    </div>
    <div class="part2">
      <div class="part2_min">
        <img src="../../static/image/caichan/caichan_part2_01.png" alt="">
        <a href="">
          <img src="../../static/image/caichan/caichan_part2_btn.png" alt="">
        </a>
        <img src="../../static/image/caichan/caichan_part2_02.png" alt="">
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
import Ad from '@/components/common/Ad.vue'
import BottomPart from '@/components/common/BottomPart.vue'
import RongYu from '@/components/common/RongYu.vue'
import YouShi from '@/components/common/YouShi.vue'
import Lawyer from '@/components/common/Lawyer.vue'
  export default {
    name: 'CaiChan',
    components:{
      HeadNav,
      Ad,
      BottomPart,
      RongYu,
      YouShi,
      Lawyer
    },
    data () {
      return {

      }
    },
    methods:{
    }
  }
</script>

<style  scoped lang="scss" type="text/css">
  .jicheng{
    .banner{
      width: 100%;
      background: url(../../static/image/caichan/banner_caichan_bg.jpg)no-repeat;
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
      background: #f4f4f4;
      .part1_min{
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
    .part2{
      width: 100%;
      background:url(../../static/image/caichan/caichan_part2_bg.png)no-repeat;
      background-size: 100% 100%;
      .part2_min{
        width: 1080px;
        margin:0 auto;
        text-align: center;
        padding-top:43px;
        padding-bottom: 43px;
        >img{
          display: block;
        }
        a{
          display: inline-block;
          img{
            display: block;
            margin:40px auto;
          }
        }
      }
    }
  }

</style>
