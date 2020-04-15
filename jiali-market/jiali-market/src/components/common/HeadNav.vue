<template>
  <div class="headNav">
    <div class="head_min">
      <div class="left">
        <router-link to="/">
          <img src="../../../static/image/common/logo.png" alt="">
        </router-link>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in navList" :key="index"><router-link :to="item.url">{{item.name}}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeadNav',
    components:{
    },
    data () {
      return {
        navList:[
          {name:'首页',url:'/Home'},
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
  .headNav{
    width:100%;
    background: #282230;
    .head_min{
      max-width:1080px;
      margin:0 auto;
      height: 6.1875rem;
      display: flex;
      justify-content: space-between;
      .left{
        width: 242px;
        display: flex;
        align-items: center;
        img{
          display: block;
          width: auto;
        }
      }
      .right{
        justify-content: end;
        display: flex;
        ul{
          display: flex;
          justify-content: space-between;
          align-items: center;
          li{
            padding-left:26px;
            padding-right:26px;
            border-right: 4px solid #000;
            font-size:18px ;
            height: 21px;
            line-height: 21px;
            &:last-of-type{
              border-right: 0;
            }
            a{
              color:#fff;
            }
            .router-link-exact-active{
              color:#f65622;
              text-decoration: underline;
              text-underline: #f65622;
            }
          }
        }
      }
    }
  }
</style>
