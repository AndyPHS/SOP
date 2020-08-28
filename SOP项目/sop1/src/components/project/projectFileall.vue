<template>
  <div class="all">
    <head-common :xiangmu = "xiangmuFlag"></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="flex con_minall">
          <div class="con_min_left">
            <ul>
              <li @click="checkTab('项目信息')" class="flex justify-center items-center">
                <img src="@/assets/image/msgcheck_icon.png" alt="">
                <h2>项目信息</h2>
              </li>
              <li @click="checkTab('项目任务')" class="flex justify-center items-center">
                <img src="@/assets/image/project_task_icon.png" alt="">
                <h2>项目任务</h2>
              </li>
              <li @click="checkTab('项目日程')" class="flex justify-center items-center">
                <img src="@/assets/image/project_plan_icon.png" alt="">
                <h2>项目日程</h2>
              </li>
              <li @click="checkTab('项目日志')" class="flex justify-center items-center">
                <img src="@/assets/image/logcheck_icon.png" alt="">
                <h2>项目日志</h2>
              </li>
              <li class="bg-white flex justify-center items-center ">
                <img src="@/assets/image/filecheck_icon.png" alt="">
                <h2>项目文件</h2>
              </li>
              <li class="flex justify-center items-center ">
                <img src="@/assets/image/project_store_icon.png" alt="">
                <h2>项目收藏</h2>
              </li>
              <li class="flex justify-center items-center ">
                <img src="@/assets/image/project_count_icon.png" alt="">
                <h2>项目统计</h2>
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
                  <div @click="addFileAc" class="flex justify-start items-center">
                    <img class="mr-3" src="@/assets/image/addfile_icon.png" alt="">
                    <span class="text-base cursor-pointer text-gray-500">新建文件夹</span>
                  </div>
                </div>
              </div>
              <div class="wenjian_min px-10 pb-10">
                <div class="flex justify-between items-center">
                  <div>
                    <div class="select flex items-center">
                      <span @click="changeSelect">{{ myjobtitle }}</span>
                      <img class="ml-2 inline-block" src="@/assets/image/down_icon_dark.png" alt="">
                      <div class="selectbox" v-if="select">
                        <ul>
                          <li v-for="(item, index) in Myjob" :key="index" @click="chooseAboutme(item)">{{ item.name }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end items-center">
                    <div class="searchBox">
                      <input class="" v-model="searchMsg" type="text">
                      <img @click="searchList" class="cursor-pointer" src="@/assets/image/search_icon.png" alt="">
                    </div>
                    <div class="flex items-center mr-5">
                      <img class="mr-2" src="@/assets/image/liebiao_icon.png" alt="">
                      <h2 class="text-red-500 font-bold">列表模式</h2>
                    </div>
                    <div class="flex items-center">
                      <img class="mr-2" src="@/assets/image/suolue_icon.png" alt="">
                      <h2 class="text-gray-400">缩略图模式</h2>
                    </div>
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
                                <span @click="renameAc()" class="px-2 cursor-pointer border-r">重命名</span>
                                <span @click="textbtn" class="px-2 cursor-pointer border-r">置顶</span>
                                <span @click="removeAc" class="px-2 cursor-pointer ">删除</span>
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
    <!-- 重命名 -->
    <el-dialog title="重命名" :visible.sync="dialogRename" center width="720px">
      <el-form :model="renameForm" id="configrenwu">
        <el-form-item label="文件夹名称" :label-width="formLabelWidth" class="w-4/5">
          <el-input v-model="renameForm.rename" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-around" >
        <div class="registBtn mx-auto" @click="renameOkBtn">确定</div>
        <div class="registCancleBtn"  @click="cancleRenameBtn">取消</div>
      </div>
    </el-dialog>
    <!-- 新建文件夹 -->
    <el-dialog title="新建文件夹" :visible.sync="dialogAddfile" center width="720px">
      <el-form  id="configrenwu">
        <el-form-item label="文件夹名称" :label-width="formLabelWidth" class="w-4/5">
          <el-input v-model="filename" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-around" >
        <div class="registBtn mx-auto" @click="addfileOkBtn">确定</div>
        <div class="registCancleBtn"  @click="cancleaddfileBtn">取消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import head_common from "@/components/partials/head_common.vue"
  export default{
    name:'projectFileall',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        xiangmuFlag: true, // 头部导航状态
        // 移动弹窗
        dialogRename: false,
        formLabelWidth: '150px',
        renameForm: {
          rename: '委托手续'
        },
        dialogAddfile: false,
        filename: '',
        searchMsg: '', //搜索文件夹
        // 筛选
        select:false,
        myjobtitle: '全部',
        Myjob: [
          {name:'全部',ID:1},{name:'完结项目',ID:2},{name:'已删除项目',ID:9}
        ],
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
      searchList(){ // 点击搜索功能
        this.$message({
          message: '查询成功',
          type: 'success'
        });
      },
      renameAc (){ // 点击重命名
        this.dialogRename = true
      },
      renameOkBtn (){ // 确定重命名
        this.dialogRename = false
      },
      cancleRenameBtn () { // 取消重命名
        this.dialogRename = false
      },
      addFileAc () { // 点击新建文件夹
        this.dialogAddfile = true
      },
      addfileOkBtn () {// 新建文件夹确认按钮
        this.dialogAddfile = false
      },
      cancleaddfileBtn () {// 取消新建
         this.dialogAddfile = false
      },
      changeSelect(){ // 点击我负责的切换
        this.select = !this.select
      },
      chooseAboutme(item){  // 选择第一个下拉框
        this.select = false
        this.myjobtitle = item.name;
        this.myjobId = item.ID;
      },
      textbtn () { // 重命名
        alert(1)
      },
      removeAc () { // 删除文件夹
        this.$confirm('确认删除该文件, 删除后不可恢复，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then((data)=>{
          this.$message({
            message: '删除成功',
            type: 'success'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      goBack () { // 返回任务管理页面
        this.$router.replace("/projectManagement")
      },
      goCon () { // 点击进入文件
        this.$router.replace('/projectFile')
      },
      uploadAc () { // 点击上传文件
        this.$router.replace('/projectFileUpload')
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
 .searchBox{
   width:210px;
   height: 32px;
   line-height: 32px;
   border: 1px solid #bababa;
   border-radius: 16px;
   display: flex;
   align-items: center;
   margin-right: 20px;
   input{
     margin-left: 16px;
     height: 30px;
     width:160px;
     border:none;
     font-size: 16px;
     color: #4c4a4a;
   }
   img{
     cursor: pointer;
   }
 }
 .select{
   position: relative;
   .selectbox{
     margin-top:10px;
     position: absolute;
     top:20px;
     left: 0;
     width:100px;
     ul{
       background-color: $color02;
       li{
         height: 30px;
         line-height: 30px;
         text-align: center;
         font-size: 14px;
         color:#fff;
         border-bottom: 1px solid #fff;
         cursor: pointer;

         &:hover{
           background-color:$color08;
         }
       }
     }
   }
 }
</style>
