<template>
  <div class="banner">

    <el-carousel indicator-position="inside" :height="heightNum" :width="widthNum">
      <el-carousel-item v-for="(item, index) in swiperList" :key="index" class="bot_con">
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Lawyer',
    props:{
      swiperList:{
        type: Array,
        required: true
      },
      heightNum:{
        type: String,
        required: true
      },
      widthNum:{
        type: String,
        required: true
      }
    },
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
  .banner{
    width: 100%;
    .el-carousel__item{
      &:first-of-type{
        background-color: #000000;
      }
      &:nth-of-type(2){
        background-color: red;
      }
      &:nth-of-type(3){
        background-color: yellow;
      }
      &:nth-of-type(4){
        background-color: green;
      }
      &:nth-of-type(5){
        background-color: blue;
      }
      &:nth-of-type(6){
        background: url(./static/image/about/banner_about_bg.jpg)no-repeat;
      }
      a{
        display:block;
        width: 1080px;
        margin:0 auto;
        img{
          display:block;
          margin-top:100px;
        }
      }
    }
  }
  >>>.el-carousel__indicators--horizontal{
    bottom:20px !important;
  }
</style>
