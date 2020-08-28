<template>
  <div class="con_min_left">
    <ul>
      <li :class="projectNavNum==1?'bg-white':'' "  class="flex justify-center items-center">
        <img src="@/assets/image/msgcheck_icon.png" alt="">
        <h2><router-link to="projectXinxi">项目信息</router-link></h2>
      </li>
      <li :class="projectNavNum==2?'bg-white':'' " class="flex justify-center items-center">
        <img src="@/assets/image/project_task_icon.png" alt="">
        <h2><router-link to="projectTask">项目任务</router-link></h2>
      </li>
      <li @click="checkTab('项目日程')" :class="projectNavNum==3?'bg-white':'' " class="flex justify-center items-center">
        <img src="@/assets/image/project_plan_icon.png" alt="">
        <h2>项目日程</h2>
      </li>
      <li @click="checkTab('项目日志')" :class="projectNavNum==4?'bg-white':'' " class="flex justify-center items-center">
        <img src="@/assets/image/logcheck_icon.png" alt="">
        <h2>项目日志</h2>
      </li>
      <li @click="checkTab('项目文件')" :class="projectNavNum==5?'bg-white':'' " class="flex justify-center items-center ">
        <img src="@/assets/image/filecheck_icon.png" alt="">
        <h2>项目文件</h2>
      </li>
      <li @click="checkTab('项目收藏')" :class="projectNavNum==6?'bg-white':'' " class="flex justify-center items-center ">
        <img src="@/assets/image/project_store_icon.png" alt="">
        <h2>项目收藏</h2>
      </li>
      <li @click="checkTab('项目统计')" :class="projectNavNum==7?'bg-white':'' " class="flex justify-center items-center ">
        <img src="@/assets/image/project_count_icon.png" alt="">
        <h2>项目统计</h2>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'project_nav',
    props:{
      projectNavNum: Number,
      required: true
    },
    data(){

    },
    methods:{
      // 左侧导航切换
      checkTab (e) {
        if(e=='项目信息'){
          this.$router.replace("/projectXinxi")

        } else if(e=="项目任务"){
          this.$router.replace("/projectTask")

        }
      },
    }
  }

</script>

<style scoped lang="scss">
  $color01: #00baa2;
  $color02: #a3a3a3;
  $color03: #f39800;
  $color04: #3489e8;
  $color05: #848484;
  $color06: #e8343d;
  $color07: #8d34e8;
  $color08: #606060;
  $color09: #443d4e;
  .bg-white{background-color: #fff;}
  .con_min_left{
    width: 138px;
    padding:130px 0;
    background-color: #e7e7e7;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    ul{
      li{
        height: 63px;
        h2{
          color: #443d4e;
          font-weight: bold;
          margin-left: 10px;
        }
      }
    }
  }
</style>
