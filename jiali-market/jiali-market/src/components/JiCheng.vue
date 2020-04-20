<template>
  <div class="jicheng">
    <head-nav></head-nav>
    <div class="banner">
      <div class="banner_min">
		  <a href="">
			  <img src="../../static/image/jicheng/banner_jicheng.png" alt="">
		  </a>
      </div>
    </div>
    <ad></ad>
    <div class="part1">
      <div class="title">
        <h2>面对遗产类<span>家事纠纷</span></h2>
        <span>您可能有以下的疑惑</span>
      </div>
      <div class="part1_min">
        <ul>
          <li>
            <img src="../../static/image/jicheng/part1.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="part2">
      <div class="title">
        <h2>遗产继承在<span>实践中的难点</span></h2>
        <span>家理律师--规避维护您的权益</span>
      </div>
      <div class="part2_min">
        <ul>
          <li>
            <img src="../../static/image/jicheng/part2_01.png" alt="">
          </li>
          <li>
            <img src="../../static/image/jicheng/part2_02.png" alt="">
          </li>
          <li>
            <img src="../../static/image/jicheng/part2_03.png" alt="">
          </li>
        </ul>
        <a href="">
          <img src="../../static/image/common/getmore_btn.png" alt="">
        </a>
      </div>
    </div>
    <div class="part3">
      <div class="title">
        <h2>继承纠纷<span>典型案例评析</span></h2>
      </div>
      <div class="part3_min">
        <ul>
          <li>
            <img src="../../static/image/jicheng/part3_01.png" alt="">
          </li>
          <li>
            <img src="../../static/image/jicheng/part3_02.png" alt="">
          </li>
          <li>
            <img src="../../static/image/jicheng/part3_03.png" alt="">
          </li>
          <li>
            <img src="../../static/image/jicheng/part3_04.png" alt="">
          </li>
          <li>
            <img src="../../static/image/jicheng/part3_05.png" alt="">
          </li>
          <li>
            <img src="../../static/image/jicheng/part3_06.png" alt="">
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
    name: 'JiCheng',
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
    background: url(../../static/image/jicheng/banner_jicheng_bg.jpg)no-repeat;
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
    background-color: #f8f8f8;
    .title{
      width: 1080px;
      margin:30px auto;
      display: flex;
      justify-content: start;
      align-items: center;
      padding-top:30px;
      h2{
        display: flex;
        align-items: center;
        width: 302px;
        font-size: 30px;
        color:#443d4e;
        font-weight: bold;
        span{
          display: inline-block;
          color:#f65622;
          height:28px;
          line-height: 28px;
          padding-right:21px;
          border-right: 2px solid #333333;
        }
      }
      >span{
        display: block;
        font-size: 20px;
        line-height: 20px;
        margin-left: 21px;
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
      padding-top:30px;
      h2{
        display: flex;
        align-items: center;
        width: 379px;
        font-size: 30px;
        color:#443d4e;
        font-weight: bold;
        span{
          display: inline-block;
          color:#f65622;
          height:28px;
          line-height: 28px;
          padding-right:21px;
          border-right: 2px solid #333333;
        }
      }
      >span{
        display: block;
        font-size: 20px;
        line-height: 20px;
        margin-left: 21px;
      }
    }
    .part2_min{
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
  .part3{
    width: 100%;
    background-color: #f8f8f8;
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
    .part3_min{
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
