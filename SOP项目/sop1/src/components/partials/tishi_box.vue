<template>
  <div>
    <div v-if="messageFlag" id="tishiBox">
      <div class="flex justify-between mx-3 py-2 head items-center">
        <div class="flex items-center">
          <img class="mr-2" src="@/assets/image/gonggao_red_icon.png" alt="">
          <div class="text-red-500 font-bold">消息通知</div>
        </div>
        <img @click="closetishi" src="@/assets/image/closex_icon.png" alt="">
      </div>
      <div class="px-3 text-606060 text-sm">
        <h2 class="pt-2">2019-10-08 20:06</h2>
        <h2 class="pt-2">张力虹创建了任务</h2>
        <h2 class="pt-2">任务名称：如何成为一个美女</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'tishi_box',
    data() {
      return {
        messageFlag: true,
      }
    },
    mounted() {
      this.closeAc()
    },
    methods:{
      closeAc () { // 3秒倒计时
        var that = this
        setTimeout(function () {
          that.messageFlag = false
        }, 3000)
      },
      closetishi () {
        var that = this
        that.messageFlag = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .text-606060 {color: #606060 ;}
  #tishiBox{
    position: fixed;
    z-index: 1000;
    top: 37px;
    right: 20px;
    width: 340px;
    height: 145px;
    border: 1px solid #E8343D;
    border-radius: 10px;
    background-color: #fff;
    .head{
      border-bottom: 1px solid #E8343D;
    }
  }
</style>
