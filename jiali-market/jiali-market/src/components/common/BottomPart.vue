<template>
  <div class="BottomNav">
    <div class="bottom_min">
      <div class="left">
        <img src="../../../static/image/common/logo.png" alt="">
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in navList" :key="index"><router-link :to="item.url">{{item.name}}</router-link></li>
        </ul>
        <p>免费客服热线: 18310278608（ 周一至周日 9:00-18:00 ）</p>
        <p>联系地址：北京市朝阳区建国门外大街22号赛特大厦3层</p>
        <p>版权所有：北京家理律师事务所</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BottomPart',
    components:{
    },
    data () {
      return {
        navList:[
          {name:'家理首页',url:'/Home'},
          {name:'离婚财产',url:'/CaiChan'},
          {name:'离婚子女',url:'/ZiNv'},
          {name:'遗产继承',url:'/JiCheng'},
          {name:'律师团队',url:'/Team'},
          {name:'关于家理',url:'/About'},
        ]
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang="scss">
  .BottomNav{
    width:100%;
    background: #282230;
    padding-bottom: 40px;
    .bottom_min{
      max-width:1080px;
      margin:0 auto;
      display: flex;
      justify-content: space-around;
      .left{
        width: 242px;
        display: flex;
        align-items: center;
        img{
          display: block;
          width: 238px;
        }
      }
      .right{
        // width:600px;
        text-align: left;

        ul{
          display: flex;
          justify-content: start;
          align-items: center;
          margin:40px auto;
          li{
            padding-left:16px;
            padding-right:16px;
            border-right: 2px solid #fff;
            font-size:16px ;
            height: 17px;
            line-height: 17px;
            &:first-of-type{
              padding-left: 0;
            }
            &:last-of-type{
              border-right: 0;
            }
            a{
              color:#fff;
            }
          }
        }
        p{
          font-size: 16px;
          margin-bottom: 18px;
          color: #fff;
          text-align: left;
        }
      }
    }
  }
</style>
