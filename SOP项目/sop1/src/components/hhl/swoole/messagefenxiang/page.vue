<template>
  <div class="message">
    <head-common></head-common>
    <div class="con  w-full">
      <div class="con_min ">
        <div class="con_minall py-10">
          <div class="px-10 pb-10 flex items-start justify-between">
            <div class="flex items-center">
              <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
              <span @click="goList" class="text-base cursor-pointer">返回</span>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-red-500 text-center">分享消息</h2>
            </div>
            <div></div>
          </div>
          <div>
            <div class="searchBox">
              <form action="">
                <input type="text" v-model="searchMsg" placeholder="输入标题内容进行搜索">
              </form>
              <div class="img">
                <img @click="searchAc" src="@/assets/image/search_icon1.png" alt="">
              </div>
            </div>
          </div>
          <div class="neirong pt-10">
            <div v-if="this.nomessageFlag == false" class="neironglist mt-5">
              <ul>
                <li class="py-5 flex items-center px-20">
                  <div class="flex items-center w-1/3">
                    <img class="mr-5" src="@/assets/image/fenxiang_small_icon.png" alt="">
                    <div>
                      <h2>张力虹</h2>
                      <span class="text-gray-600">2019-11-18 10：10</span>
                    </div>
                  </div>
                  <div @click="goMin" class="w-2/3 text-left messagecon" >20190930 张力虹 张三离婚纠纷起诉状 1.0版20190930 张力虹 张三离婚纠纷起诉20190930 张力虹 张三离婚纠纷起诉20190930 张力虹 张三离婚纠纷起诉20190930 张力虹 张三离婚纠纷起诉</div>
                </li>
              </ul>
            </div>
            <div v-if="this.nomessageFlag == true" class="text-center">
              <div class="w-1/5 text-center mx-auto py-20">
                <img src="@/assets/image/nomessage.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import head_common from "@/components/partials/head_common.vue"
export default {
  name:'messagefenxiang',
  components: {
	 'head-common': head_common
  },
  data(){
    return{
      searchMsg: '', // 搜索内容
      mesNum: 4,
      nomessageFlag: false // 暂无消息
    }
  },
  methods: {
    searchAc () { // 搜索按钮
      alert(this.searchMsg)
      this.searchMsg = ''
    },
    hasReadAc () { // 全部已读
      this.mesNum = 0
      this.nomessageFlag = true
    },
    goMin (){
      this.$router.replace('/messageCon')
    },
    goList () {
      this.$router.replace('/messageList')
    }
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
  .bg-f4f4f4{background-color: #f4f4f4;}
  .message{
    .con{
      background-color: #f8f8f8;
      padding-bottom:20px;
      .con_min{
        max-width: 1000px;
        margin:0 auto;
        background-color: #fff;
        .con_minall{
          box-shadow: 1px 1px 15px 1px rgba(28,9,9,0.1);
          border-radius: 5px;
          .searchBox{
            width: 590px;
            height: 32px;
            margin:0px auto;
            line-height: 32px;
            border: 1px solid #bababa;
            border-radius: 16px;
            display: flex;
            align-items: center;
            input{
              width: 528px;
              padding-left: 13px;
              line-height: 30px;
              height: 30px;
              border:none;
              border-radius: 15px;
              font-size: 16px;
            }
            .img{
              width: 40px;
              height: 30px;
              text-align: center;
              // display: inline-block;
              margin:0 auto;
              img{
                margin:5px auto;
                cursor: pointer;
              }
            }
          }
          .neirong{
            .mumspan{
              width: 17px;
              height: 17px;
              border-radius: 50%;
              background-color: #E8343D;
              color: #fff;
              font-size: 12px;
              text-align: center;
              line-height: 17px;
              position: absolute;
              top:-10px;
              right: -15px;
            }
            .neironglist{
              ul{
                li{
                  &:hover{
                    background-color: #f4f4f4;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .messagecon{white-space: pre-wrap;}
</style>
