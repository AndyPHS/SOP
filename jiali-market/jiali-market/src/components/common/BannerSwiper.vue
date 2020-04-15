<template>
  <div class="banner">
    <div class="banner_min">
      <el-carousel indicator-position="inside" :height="heightNum" :width="widthNum">
        <el-carousel-item v-for="(item, index) in swiperList" :key="index" class="bot_con">
          <a :href="item.url">
            <img :src="item.img" alt="">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
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
    background:rgba($color: #000000, $alpha: 0.8);
    .banner_min{
      max-width:1246px;
      margin:0 auto;
      .bot_con{
        a{
          display: block;
          img{
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
  >>>.el-carousel__indicators--horizontal{
    bottom:20px !important;
  }
</style>
