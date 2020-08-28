<template>
  <div class="all">
    <head-common :renwu = "renwuFlag"></head-common>
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
              <li @click="checkTab(3)" class="bg-white flex justify-center items-center ">
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
                  <h2 v-if="taskTitle" class="text-2xl text-red-500 font-bold mb-5">{{taskTitle}}</h2>
                  <h3 v-if="projectTitle"  class="text-xl text-gray-500 font-bold">{{projectTitle}}</h3>
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
                      <img @click="changeSelect" class="ml-2 inline-block" src="@/assets/image/down_icon_dark.png" alt="">
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

                        <li
                        v-for="(item,key) in folderList"
                        :key="key"
                        class="text-base w-full flex justify-center items-center text-gray-500 py-2 border-b border-gray-300">
                          <div class="w-1/4 text-left flex items-center">
                            <img class="mr-2" src="@/assets/image/file_icon.png" alt="">
                            <h2 @click="goCon(item.id)" class="text-gray-700 text-sm cursor-pointer">{{item.name}}</h2>
                          </div>
                            <span class="w-1/4 text-center text-sm text-gray-600">{{item.filesNum}}</span>
                            <span class="w-1/4 text-center text-sm text-gray-600">{{item.update_time}}</span>
                            <div class="w-1/4 text-center text-gray-600">
                            <el-tooltip placement="bottom">
                                <div slot="content" class="flex">
                                <span @click="renameAc(item)" class="px-2 cursor-pointer border-r">重命名</span>
                                <span @click="textbtn(item)" class="px-2 cursor-pointer border-r">置顶</span>
                                <span @click="removeAc(item)" class="px-2 cursor-pointer ">删除</span>
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
          <el-input v-model="updateFolderName" ></el-input>
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
import { folderList } from '@/api/hhl/task/folderList'
import { updateFolder } from '@/api/hhl/task/updateFolder'
import { deleteFolder } from '@/api/hhl/task/deleteFolder'
import { addFolder } from '@/api/hhl/task/addFolder'
import { projectInfo } from '@/api/hhl/project/projectInfo'
import { taskInfo } from '@/api/hhl/task/taskInfo'

  export default{
    name:'taskFileall',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        renwuFlag: true,
        // 移动弹窗
        dialogRename: false,
        formLabelWidth: '150px',
        renameForm: {
          rename: '委托手续'
        },
        dialogAddfile: false,
        filename: '',
        // 筛选
        select:false,
        myjobtitle: '全部',
        Myjob: [
          {name:'全部',ID:1},{name:'完结项目',ID:2},{name:'已删除项目',ID:9}
        ],
        //  搜索
        searchMsg: '', //搜索文件夹

        folderList:[],
        folderListData:[],
        updateFolderData:"",
        updateFolderName:"",
        taskTitle:false,
        projectTitle:false,
      }
    },
    mounted(){
        this.getFolderList()
        this.info()
    },
    methods:{
      changeSelect(){ // 点击我负责的切换
        this.select = !this.select
      },
      chooseAboutme(item){  // 选择第一个下拉框
        this.select = false
        this.myjobtitle = item.name;
        this.myjobId = item.ID;
      },
      searchList(){ // 点击搜索功能
        this.$message({
          message: '查询成功',
          type: 'success'
        });
      },
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
            } else if (e==3){
              var selectRenwuId = localStorage.getItem('selectRenwuId')
              this.$router.replace('/TaskFileall/'+selectRenwuId + '/2')
            }
        },
        renameAc (res){ // 点击重命名
            this.dialogRename = true
            this.updateFolderData=res;
            this.updateFolderName=res.name
        },
        renameOkBtn (){ // 确定重命名
            this.dialogRename = false
            this.updateFolderData.name=this.updateFolderName

            let data = this.updateFolderData
            updateFolder(data).then(async  res=>{

            })

        },
        cancleRenameBtn () { // 取消重命名
            this.dialogRename = false
        },
        addFileAc () { // 点击新建文件夹
            this.dialogAddfile = true
        },
        addfileOkBtn () {// 新建文件夹确认按钮
            // if(this.filename)
            this.dialogAddfile = false
            let data={
                name:this.filename,
                fid:0,
                orderId:0,
                topping:0,
                operation:0,
                dpId:this.$route.params.dpId,
                type:this.$route.params.type
            }
            addFolder(data).then(async  res=>{
                this.filename=""
                this.getFolderList()
            })
            // filename
        },
        cancleaddfileBtn () {// 取消新建
            this.dialogAddfile = false
            this.filename=""
        },
      textbtn (res) { // 置顶
            // console.log(res)
            if(res.topping==1){
              res.topping=0
            }else{
              res.topping=1
            }
            updateFolder(res).then(async  res=>{
                this.getFolderList()
            })
        },
      removeAc (res) { // 删除文件夹
        this.$confirm('确认删除该文件, 删除后不可恢复，是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
            }).then((data)=>{
                console.log(res)
                deleteFolder(res).then(async  res=>{
                    this.getFolderList()
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                })

            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
            });
        },
        goBack () { // 返回任务管理页面
            this.$router.replace("/TaskManagement")
        },
        goCon (id) {
            this.$router.replace('/taskFileList/'+this.$route.params.dpId+"/"+this.$route.params.type+"/"+id)
        },
        uploadAc () { // 点击上传文件
            this.$router.replace('/taskFileUpload/'+this.$route.params.dpId+"/"+this.$route.params.type+"/"+this.$route.params.folderId)
        },
        getFolderList(){
            let data={
                dpId:this.$route.params.dpId,
                type:this.$route.params.type
            }
            folderList(data).then(async res=>{
                this.folderList=res.data.data
                // this.folderListData=res.data.data
            })
            // console.log(this.$route.params)
        },
        info(){
          if(this.$route.params.type==1){
            projectInfo({projectId:this.$route.params.dpId}).then(async res=>{
              // this.infoData=res.data.data
              this.projectTitle=res.data.data.basic_data.title
            })
            // alert(1)
          }else{
            taskInfo({taskId:this.$route.params.dpId}).then(async res=>{
              // this.infoData=res.data.data
              this.taskTitle=res.data.data.basic_data.title
              if(res.data.data.basic_data.type==2){
                this.projectTitle=res.data.data.basic_data.projectTitle
              }

            })
          }
        }

    },
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
   display: none;
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
