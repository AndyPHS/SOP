<template>
  <div class="zinv">
    <head-nav></head-nav>
    <div class="banner">
      <div class="banner_min">
        <a href="">
          <img src="../../static/image/zinv/banner_zinv.png" alt="">
        </a>
      </div>
    </div>
    <ad></ad>
    <div class="part1">
      <div class="title">
        <h2>获取抚养权的<span>六大方面</span></h2>
      </div>
      <div class="part1_min">
        <ul>
          <li>
            <img src="../../static/image/zinv/part1_01.png" alt="">
          </li>
          <li>
            <img src="../../static/image/zinv/part1_02.png" alt="">
          </li>
          <li>
            <img src="../../static/image/zinv/part1_03.png" alt="">
          </li>
          <li>
            <img src="../../static/image/zinv/part1_04.png" alt="">
          </li>
          <li>
            <img src="../../static/image/zinv/part1_05.png" alt="">
          </li>
          <li>
            <img src="../../static/image/zinv/part1_06.png" alt="">
          </li>
        </ul>
        <a href="">
          <img src="../../static/image/common/getmore_btn.png" alt="">
        </a>
      </div>
    </div>
    <div class="part2">
      <div class="title">
        <h2>获取抚养权的<span>六大方面</span></h2>
      </div>
      <div class="part2_min">
        <ul>
          <li>
            <img src="../../static/image/zinv/part2_01.png" alt="">
          </li>
          <li>
            <img src="../../static/image/zinv/part2_02.png" alt="">
          </li>
          <li>
            <img src="../../static/image/zinv/part2_03.png" alt="">
          </li>
        </ul>
        <a href="">
          <img src="../../static/image/common/getmore_btn.png" alt="">
        </a>
      </div>
    </div>
    <div class="part3">
      <div class="part3_min">
        <ul>
          <li>
            <img src="../../static/image/zinv/part3_01.png" alt="">
          </li>
        </ul>
        <a href="">
          <img src="../../static/image/common/getmore_btn.png" alt="">
        </a>
      </div>
    </div>
    <div class="part4">
      <div class="title">
        <h2>诉求中<span>常见问题及解决方案</span></h2>
      </div>
      <div class="part4_min">
        <ul>
          <li>
            <img src="../../static/image/zinv/part4.png" alt="">
          </li>
        </ul>
        <a href="">
          <img src="../../static/image/common/getmore_btn.png" alt="">
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
  import Ad from '@/components/common/Ad.vue'
  import BottomPart from '@/components/common/BottomPart.vue'
  import RongYu from '@/components/common/RongYu.vue'
  import YouShi from '@/components/common/YouShi.vue'
import Lawyer from '@/components/common/Lawyer.vue'
  export default {
    name: 'ZiNv',
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
.zinv{
  .banner{
    width: 100%;
    background: url(../../static/image/zinv/banner_zinv_bg.jpg)no-repeat -500px;
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
    background-color: #f4f4f4;
    .title{
      width: 1080px;
      margin:0 auto;
      display: flex;
      justify-content: start;
      align-items: center;
      padding-top: 43px;
      margin-bottom: 24px;
      h2{
        display: flex;
        align-items: center;
        width: 330px;
        font-size: 30px;
        color:#443d4e;
        font-weight: bold;
        span{
          display: inline-block;
          color:#f65622;
          height:28px;
          line-height: 28px;
        }
      }
    }
    .part1_min{
      width: 1080px;
      margin:0 auto;
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
  .part2{
    width: 100%;
    background-color: #ececec;
    .title{
      width: 1080px;
      margin:0 auto;
      display: flex;
      justify-content: start;
      align-items: center;
      padding-top: 43px;
      margin-bottom: 24px;
      h2{
        display: flex;
        align-items: center;
        width: 428px;
        font-size: 30px;
        color:#443d4e;
        font-weight: bold;
        span{
          display: inline-block;
          color:#f65622;
          height:28px;
          line-height: 28px;
        }
      }
    }
    .part2_min{
      width: 1080px;
      margin:0 auto;
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
  .part3{
    width: 100%;
    background:url(../../static/image/zinv/part3_bg.png)no-repeat;
    .part3_min{
      width: 1080px;
      margin:0 auto;
      padding-bottom: 35px;
      padding-top: 25px;
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
  .part4{
    width: 100%;
    background-color: #282230;
    .title{
      width: 1080px;
      margin:0 auto;
      padding-top: 43px;
      margin-bottom: 24px;
      h2{
        margin:0 auto;
        width: 390px;
        font-size: 30px;
        color:#fff;
        font-weight: bold;
        span{
          display: inline-block;
          color:#f65622;
          height:28px;
          line-height: 28px;
        }
      }
    }
    .part4_min{
      width: 1080px;
      margin:0 auto;
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
