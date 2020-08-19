<template>
  <div class="all">
    <head-common></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="flex con_minall">
          <div class="con_min_left">
            <ul>
              <li @click="checkTab(1)" class="flex justify-center items-center">
                <img src="@/assets/image/msgcheck_icon.png" alt="">
                <h2>任务信息</h2>
              </li>
              <li @click="checkTab(2)" class="flex justify-center items-center">
                <img src="@/assets/image/logcheck_icon.png" alt="">
                <h2>任务日志</h2>
              </li>
              <li class="bg-white flex justify-center items-center ">
                <img src="@/assets/image/filecheck_icon.png" alt="">
                <h2>任务文件</h2>
              </li>
            </ul>
          </div>
          <div class="con_min_right">
            <!-- 任务文件 -->
            <div class="wenjian">
              <div class="flex justify-between items-start px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer text-gray-500">返回</span>
                </div>
                <div class="text-center">
                  <h2 class="text-2xl text-red-500 font-bold mb-5">确认管辖法院</h2>
                  <h3 class="text-xl text-gray-500 font-bold">张三诉讼李四离婚纠纷案件</h3>
                </div>
                <div class="text-left">
                  <div class="flex justify-start items-center mb-5">
                    <img class="mr-3" src="@/assets/image/upload_icon.png" alt="">
                    <span @click="uploadAc" class="text-base cursor-pointer text-gray-500">上传文件</span>
                  </div>
                  <div class="flex justify-start items-center">
                    <img class="mr-3" src="@/assets/image/addfile_icon.png" alt="">
                    <span class="text-base cursor-pointer text-gray-500">新建文件夹</span>
                  </div>
                </div>
              </div>
              <div class="wenjian_min px-10 pb-10">
                <div class="flex justify-end items-center">
                  <div class="flex items-center mr-5">
                    <img class="mr-2" src="@/assets/image/liebiao_icon.png" alt="">
                    <h2 class="text-red-500 font-bold">列表模式</h2>
                  </div>
                  <div class="flex items-center">
                    <img class="mr-2" src="@/assets/image/suolue_icon.png" alt="">
                    <h2 class="text-gray-400">缩略图模式</h2>
                  </div>
                </div>
                <div>
                  <div class="mt-8 wenjianjia ">
                    <div class="pb-3 border-b border-gray">
                      <ul class="flex text-gray text-base">
                        <li class="w-1/4 font-bold text-left">名称</li>
                        <li class="w-1/4 font-bold text-center">文件数</li>
                        <li class="w-1/4 font-bold text-center">最后修改时间</li>
                        <li class="w-1/4 font-bold text-center">操作</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li class="text-base flex justify-center items-center text-gray-500 py-2 border-b border-gray-300">
                          <div class="w-1/4 text-left flex items-center">
                            <img class="mr-2" src="@/assets/image/file_icon.png" alt="">
                            <h2 @click="goCon" class="text-gray-700 text-sm cursor-pointer">委托手续</h2>
                          </div>
                          <span class="w-1/4 text-center text-sm text-gray-600">3</span>
                          <span class="w-1/4 text-center text-sm text-gray-600">2019-10-19</span>
                          <div class="w-1/4 text-center text-gray-600">
                            <el-tooltip placement="bottom">
                              <div slot="content" class="flex">
                                <span @click="textbtn" class="px-2 cursor-pointer border-r">重命名</span>
                                <span @click="textbtn" class="px-2 cursor-pointer border-r">置顶</span>
                                <span class="px-2 cursor-pointer ">删除</span>
                              </div>
                              <img class="mx-auto cursor-pointer" src="@/assets/image/soon_icon.png" alt="">
                            </el-tooltip>
                          </div>
                        </li>
                        <li class="text-base flex justify-center items-center text-gray-500 py-2 border-b border-gray-300">
                          <div class="w-1/4 text-left flex items-center">
                            <img class="mr-2" src="@/assets/image/file_icon.png" alt="">
                            <h2 @click="goCon" class="text-gray-700 text-sm cursor-pointer">委托手续</h2>
                          </div>
                          <span class="w-1/4 text-center text-sm text-gray-600">3</span>
                          <span class="w-1/4 text-center text-sm text-gray-600">2019-10-19</span>
                          <div class="w-1/4 text-center text-gray-600">
                            <el-tooltip placement="bottom">
                              <div slot="content" class="flex">
                                <span @click="textbtn" class="px-2 cursor-pointer border-r">重命名</span>
                                <span @click="textbtn" class="px-2 cursor-pointer border-r">置顶</span>
                                <span class="px-2 cursor-pointer ">删除</span>
                              </div>
                              <img class="mx-auto cursor-pointer" src="@/assets/image/soon_icon.png" alt="">
                            </el-tooltip>
                          </div>
                        </li>
                        <li class="text-base flex justify-center items-center text-gray-500 py-2 border-b border-gray-300">
                          <div class="w-1/4 text-left flex items-center">
                            <img class="mr-2" src="@/assets/image/file_icon.png" alt="">
                            <h2 @click="goCon" class="text-gray-700 text-sm cursor-pointer">委托手续</h2>
                          </div>
                          <span class="w-1/4 text-center text-sm text-gray-600">3</span>
                          <span class="w-1/4 text-center text-sm text-gray-600">2019-10-19</span>
                          <div class="w-1/4 text-center text-gray-600">
                            <el-tooltip placement="bottom">
                              <div slot="content" class="flex">
                                <span @click="textbtn" class="px-2 cursor-pointer border-r">重命名</span>
                                <span @click="textbtn" class="px-2 cursor-pointer border-r">置顶</span>
                                <span class="px-2 cursor-pointer ">删除</span>
                              </div>
                              <img class="mx-auto cursor-pointer" src="@/assets/image/soon_icon.png" alt="">
                            </el-tooltip>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
  export default{
    name:'TaskFileall',
    components: {
      'head-common': head_common
    },
    data() {
      return {

      }
    },
    mounted(){

    },
    methods:{
      // 左侧导航切换
      checkTab (e) {
        if(e==1){
          this.$router.push({
            path:'/TaskCon',
            query:{
              nav: 1
            }
          })
        } else if (e==2){
         this.$router.push({
           path:'/TaskCon',
           query:{
             nav: 2
           }
         })
        }
      },
      textbtn () { // 重命名
        alert(1)
      },
      goBack () { // 返回任务管理页面
        this.$router.replace("/TaskManagement")
      },
      goCon () {
        this.$router.replace('/TaskFile')
      },
      uploadAc () { // 点击上传文件
        this.$router.replace('/TaskFileUpload')
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
  .con{
    background-color: #f8f8f8;
    padding-bottom:20px;
    .con_min{
      max-width: 1000px;
      margin:0 auto;
      .con_minall{
        box-shadow: 1px 1px 15px 1px rgba(28,9,9,0.1);
        border-radius: 5px;
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
        .con_min_right{
          width: 862px;
          background-color: #fff;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;

          .notask{
            .notaskimg{
              padding:120px;
              margin:0 auto;
            }
          }
        }
      }
    }
  }
.registBtn{width: 225px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .registBtn:hover{background-color: red;color: #fff;}
 .registCancleBtn{width: 225px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .inputcon{width: 83.3% !important;}
 .default_bg{background-color: #e7e7e7;;}
</style>
