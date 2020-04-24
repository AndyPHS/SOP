<template>
  <div class="rongyu">
    <div class="rongyu_title">
      <h2>家理让您<span>想离就离</span></h2>
      <span>争夺应得财产，孩子抚养权就选家理律师</span>
    </div>
    <div class="rongyu_min">
      <div class="left">
        <ul>
          <li v-for="(item, index) in RongYuList" :key="index">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>
      <div class="right">
        <el-carousel indicator-position="inside" height="402px">
          <el-carousel-item v-for="(item, index) in swiperAll" :key="index">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RongYu',
    components:{
    },
    data () {
      return {
        RongYuList:[
          './static/image/common/rongyu_left01.png',
          './static/image/common/rongyu_left02.png',
          './static/image/common/rongyu_left03.png',
          './static/image/common/rongyu_left04.png',
          './static/image/common/rongyu_left05.png',
          './static/image/common/rongyu_left06.png'
        ],
        swiperAll:[
          './static/image/common/rongyu_right01.png',
          './static/image/common/rongyu_right01.png',
          './static/image/common/rongyu_right01.png'
        ]
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang="scss">
  .rongyu{
    width:100%;
    background: #ececec;
    padding-bottom: 40px;
    .rongyu_title{
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
    .rongyu_min{
      width: 1080px;
      margin: 0 auto;
      margin-top:27px;
      display: flex;
      justify-content: space-between;
      .left{
        width: 433px;
        ul{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          li{
            width: 209px;
            height: 124px;
            border:1px solid #343434;
            margin-bottom:12px ;
            img{
              display: block;
            }
          }
        }
      }
      .right{
        width:626px;
      }
    }
  }
</style>
