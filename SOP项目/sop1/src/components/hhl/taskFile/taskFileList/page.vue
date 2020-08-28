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
              <li @click="checkTab(3)" class="flex justify-center items-center bg-white">
                <img src="@/assets/image/filecheck_icon.png" alt="">
                <h2>任务文件</h2>
              </li>
            </ul>
          </div>
          <div class="con_min_right">
            <!-- 任务文件 -->
            <div v-if="wenjuanList" class="wenjian">
              <div class="flex justify-between items-start px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer text-gray-500">返回</span>
                </div>
                <div class="text-center">
                 <h2 v-if="taskTitle" class="text-2xl text-red-500 font-bold mb-5">{{taskTitle}}</h2>
                  <h3 v-if="projectTitle"  class="text-xl text-gray-500 font-bold">{{projectTitle}}</h3>
                    
                    <!-- <ul class="iconList">
                      <li>
                        <img src="@/assets/image/guo_icon.png" alt="">
                      </li>
                      <li>
                        <img src="@/assets/image/feng_icon.png" alt="">
                      </li>
                      <li>
                        <img src="@/assets/image/xie_icon.png" alt="">
                      </li>
                      <li>
                        <img src="@/assets/image/yan_icon.png" alt="">
                      </li>
                    </ul> -->
                </div>
                <div class="text-left">
                  <div class="flex justify-start items-center mb-5">
                    <img class="mr-3" src="@/assets/image/upload_icon.png" alt="">
                    <span @click="goUpload" class="text-base text-gray-500">上传文件</span>
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
                  <div class="mt-8 wenjianliebiao">
                    <div class="flex justify-between items-center">
                      <div class=" wenjianliebiao_left">
                        <h2 class="relative font-bold">起诉状<span class="absolute">3</span></h2>
                      </div>
                      <div class="w-1/3 ">
                        <ul class="flex justify-end items-center text-sm">
                          <li @click="moveAc" class="px-2 cursor-pointer border-r">移动</li>
                          <li @click="downloadAc" class="px-2 cursor-pointer border-r">下载</li>
                          <li @click="shareAc" class="px-2 cursor-pointer border-r">分享</li>
                          <li @click="removeFileAc" class="px-2 cursor-pointer ">删除</li>
                        </ul>
                      </div>
                    </div>
                    <div class="pb-3 ml-4 mt-8 border-b border-gray">
                      <ul class="flex text-gray text-sm">
                        <li class="w-2/3 font-bold text-left">名称</li>
                        <li class="w-1/5 font-bold text-center">上传时间</li>
                        <li class="w-1/5 font-bold text-center">上传者</li>
                        <li class="w-1/5 font-bold text-center">操作</li>
                      </ul>
                    </div>
                    <div>
                      <ul class="w-full groutul">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" class="w-full">
                          <el-checkbox v-for="(item, key) in filesLIst" :label="item.name" :key="key" class="w-full">
                            <li class="text-base w-full flex justify-center items-center text-gray-500 py-2 border-b border-gray-300">
                              <div class="w-2/3 text-left flex items-center">
                                <img class="mr-2" src="@/assets/image/word_icon.png" alt="">
                                <h2 class="text-gray-700 text-sm cursor-pointer">{{item.name}}</h2>
                              </div>
                              <span class="w-1/5 text-center text-sm text-gray-600">{{item.created_time}}</span>
                              <span class="w-1/5 text-center text-sm text-gray-600">{{item.userName}}</span>
                              <div class="w-1/5 text-center text-gray-600">
                                <el-tooltip placement="bottom">
                                  <div slot="content" class="flex">
                                    <span @click="viewAc" class="px-2 cursor-pointer border-r">预览</span>
                                    <span @click="renameAc" class="px-2 cursor-pointer border-r">重命名</span>
                                    <span @click="goTopAc" class="px-2 cursor-pointer">置顶</span>
                                  </div>
                                  <img class="mx-auto cursor-pointer" src="@/assets/image/soon_icon.png" alt="">
                                </el-tooltip>
                              </div>
                            </li>
                          </el-checkbox>
                        </el-checkbox-group>
                      </ul>
                    </div>
                    <div class="pt-10 w-1/2 mx-auto">
                      <el-pagination
                        @current-change="handleCurrentChange"
                        layout="total, prev, pager, next"
                        :total="filesInfo.total">
                      </el-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 上传文件 -->
            <div v-if="shangchuanBox" class="shangchuan">
              <div class="flex justify-between items-start px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goCon" class="text-lg cursor-pointer text-gray-500">返回</span>
                </div>
                <div class="text-center">
                  <h2 class="text-2xl text-red-500 font-bold mb-5">确认管辖法院</h2>
                  <h3 class="text-xl text-gray-500 font-bold">张三诉讼李四离婚纠纷案件</h3>
                </div>
                <div></div>
              </div>
              <div class="shangchuan_min px-10 pb-10">
                <el-form ref="uploadForm" :model="uploadForm" label-width="80px">
                  <el-form-item label="上传位置">
                    <el-select v-model="uploadForm.where" size="mini" placeholder="请选择上传位置">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <div class="px-3">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList"
                      list-type="picture">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                  <div class="pt-5">
                    <el-form-item label="查看权限">
                      <el-radio-group v-model="uploadForm.right" @change="selectRight">
                        <el-radio value="1" label="团队所有人可见"></el-radio>
                        <el-radio value="2" label="团队部分人可见"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <div v-if="isHasRight">
                    <el-form-item label="谁可以看">
                      <el-select v-model="uploadForm.hasright" size="mini" multiple placeholder="请选择">
                        <el-option
                          v-for="item in folder"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="w-2/3 py-10 mx-auto flex justify-around">
                  <div class="registBtn mx-auto" @click="uploadOkBtn">确认上传</div>
                  <div class="registCancleBtn"  @click="uploadCancleBtn">取消</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 移动弹窗 -->
    <el-dialog title="" :visible.sync="dialogMove" center width="720px">
      <el-form :model="moveForm" id="configrenwu">
        <el-form-item label="移动至" :label-width="formLabelWidth">
          <el-select class="mr-10 w-4/5" v-model="mvFolderId" placeholder="请选择">
            <el-option
              v-for="(item, index) in folder"
              :key="index"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-around" >
        <div class="registBtn mx-auto" @click="moveOkBtn">确定</div>
        <div class="registCancleBtn"  @click="cancleMoveBtn">取消</div>
      </div>
    </el-dialog>
    <!-- 分享弹窗 -->
    <el-dialog title="" :visible.sync="dialogShare" center width="720px">
      <el-form :model="shareForm" id="configrenwu">
        <el-form-item label="分享给" :label-width="formLabelWidth">
          <el-select class="mr-10 w-4/5" v-model="shareForm.selectBox" placeholder="请选择" @change="addshareAc">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="py-3 sharename">
        <ul class="flex">
          <li v-for="(item, index) in sharenameAll" :key="index" class="">{{ item.name }}<img @click="removeShare(index)" src="@/assets/image/close_red_icon.png" alt=""></li>
        </ul>
      </div>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-around" >
        <div class="registBtn mx-auto" @click="shareOkBtn">确定</div>
        <div class="registCancleBtn"  @click="cancleShareBtn">取消</div>
      </div>
    </el-dialog>
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
  </div>
</template>

<script>
import head_common from "@/components/partials/head_common.vue"
import { filesLIst } from '@/api/hhl/files/filesLIst'
import { filesGroup } from '@/api/hhl/files/filesGroup'
import { fileUpdate } from '@/api/hhl/files/fileUpdate'
import { fileDelete } from '@/api/hhl/files/fileDelete'
import { projectInfo } from '@/api/hhl/project/projectInfo'
import { taskInfo } from '@/api/hhl/task/taskInfo'
  import {addInspectionTask, deleteInspectionTask, selectInspectionTask, selectSurplusInspectionTask} from '@/api/api/requestLogin.js' // 添加，删除，查找项目自检项
  const cityOptions = ['20190925  张力虹  张三离婚纠纷起诉状1.0版', '20190925  张力虹  张三离婚纠纷起诉状2.0版', '20190925  张力虹  张三离婚纠纷起诉状3.0版', '20190925  张力虹  张三离婚纠纷起诉状4.0版'];
  export default{
    name:'TaskManagement',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        renwuFlag: true,
        visible:false,
        name: localStorage.getItem('name'),
        userId: localStorage.getItem('userId'),
        shortName:'', // 名字两个字
        ins:1,
        // 多选框
        checkedCities: [],
        cities: cityOptions,
        // 分页
        currentPage1: 5,
        // 上传文件
        uploadForm: {
          where: '', // 上传位置
          right: '', // 权限
          hasright: [] // 谁可以看
        },
        isHasRight: false,  // 是否有权看
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        wenjuanList: true,
        shangchuanBox: false,
        // 移动弹窗
        dialogMove: false,
        formLabelWidth: '150px',
        moveForm: {
          selectBox: ''
        },
        // 分享弹窗
        dialogShare: false,
        shareForm: {
          selectBox: ''
        },
        sharenameAll: [
          {name:'大海',id:1},{name:'大海',id:1},{name:'大海',id:1},{name:'大海',id:1},{name:'大海',id:1},
        ],
        // 重命名
        dialogRename: false,
        renameForm: {
          rename: '委托手续'
        },
        filesLIst:[],
        folder:[],
        choiceFile:[],
        mvFolderId:"",
        taskTitle:false,
        projectTitle:false,
        filesInfo:[],
      }
    },
    mounted(){
      this.getFileList();
      this.info();
    },
    methods:{
      textbtn () { // 重命名
        alert(1)
      },
      goCon () { // 点击文件页面
        this.wenjuanList = true
        this.shangchuanBox = false
        this.uploadForm.where = ""
        this.uploadForm.right = ""
        this.uploadForm.hasright = []
      },
      goUpload () { // 点击上传
        this.$router.replace('/taskFileUpload/'+this.$route.params.dpId+"/"+this.$route.params.type+"/"+this.$route.params.folderId)
      },
      goBack () { // 返回任务管理页面
        this.$router.replace("/TaskFileall/"+this.$route.params.dpId+"/"+this.$route.params.type)
      },
      taolun () {
        alert(1)
      },
      // 多选框
      handleCheckedCitiesChange(value) {
        this.choiceFile=value
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.getFileList(val);
      },
      // 上传图片
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      selectRight () { // 选择谁可以见
        console.log(this.uploadForm.right)
        if (this.uploadForm.right == '团队部分人可见'){
          this.isHasRight = true
        } else {
          this.isHasRight = false
        }
      },
      uploadOkBtn () { // 点击确认上传按钮
        this.$message({
          showClose: true,
          message: '恭喜你，上传成功',
          type: 'success'
        });
      },
      uploadCancleBtn () { // 取消
        this.$message({
          showClose: true,
          message: '取消上传'
        });
      },
      // 移动至
      moveAc () { // 点击移动
        this.dialogMove = true
      },
      moveOkBtn () { // 确定移动
        // console.log(this.mvFolderId)
        for(let i=0;i<this.filesLIst.length;i++){
            if(this.choiceFile.includes(this.filesLIst[i]['name'])){
                let data={
                  fileId:this.filesLIst[i]['id'],
                  filePathId:this.mvFolderId
                }
                fileUpdate(data).then(async res=>{
                })
            }
          }
          this.getFileList()
        this.dialogMove = false
      },
      cancleMoveBtn () { // 取消移动
        this.dialogMove = false
        this.moveForm.selectBox = ''
      },
      // 下载
      downloadAc () {
      
        // window.open = "http://jializhishi.oss-cn-beijing.aliyuncs.com/2020082709290190555809.png"
        // this.downloadFile('123.png','http://jializhishi.oss-cn-beijing.aliyuncs.com/2020082709290190555809.png')
         for(let i=0;i<this.filesLIst.length;i++){
            if(this.choiceFile.includes(this.filesLIst[i]['name'])){
              // downloadByBlob(this.filesLIst[i]['url'],this.filesLIst[i]['name']);
            }
          }
        this.$message({
          message: '恭喜你，下载成功',
          type: 'success'
        });
      },
      // 分享
      shareAc () { // 点击分享
        this.dialogShare = true
      },
      shareOkBtn () { //确认分享
        this.dialogShare = false
        this.$message({
          showClose: true,
          message: '文件已成功分享',
          type: 'success'
        });
      },
      cancleShareBtn () { // 取消分享
        this.dialogShare = false
        this.shareForm.selectBox = ''
      },
      addshareAc () { // 添加分享人
        this.sharenameAll.push({
          name: this.shareForm.selectBox,
          id: 222
        })
      },
      removeShare (index) { // 删除某元素
        this.sharenameAll.splice(index, 1)
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
      //置顶
      goTopAc () {
        this.$message({
          message: '置顶成功',
          type: 'success'
        });
      },
      viewAc () { // 预览按钮
        this.$router.replace('/taskPreview')
      },
      // 删除
      removeFileAc () {
        this.$confirm('确认删除该文件, 删除后不可恢复，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then((data)=>{
          console.log(this.choiceFile)
          for(let i=0;i<this.filesLIst.length;i++){
            if(this.choiceFile.includes(this.filesLIst[i]['name'])){
                let data={
                  fileId:this.filesLIst[i]['id']
                }
                fileDelete(data).then(async res=>{
                })
            }
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
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
          this.$router.replace('/TaskFileall')
        }
      },
      getFileList(page=1){
        let data={
          fileId:this.$route.params.folderId,
          page:page,
        }
          filesLIst(data).then(async res=>{
              // this.taskInfo=res.data.data
              this.filesLIst=res.data.data.data
              this.filesInfo=res.data.data
          })
          let data2 = {
              "dpId":this.$route.params.dpId,
              "type":this.$route.params.type
          };
          filesGroup(data2).then(async res=>{
                      this.folder=res.data.data
                  })
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
        },
        downloadByBlob(url,name) {
            let image = new Image()
            image.setAttribute('crossOrigin', 'anonymous')
            image.src = url
            image.onload = () => {
              let canvas = document.createElement('canvas')
              canvas.width = image.width
              canvas.height = image.height
              let ctx = canvas.getContext('2d')
              ctx.drawImage(image, 0, 0, image.width, image.height)
              canvas.toBlob((blob) => {
                let url = URL.createObjectURL(blob)
                download(url,name)
                // 用完释放URL对象
                URL.revokeObjectURL(url)
              })
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
  .active{
    color:$color06;
  }
  .head_top{
    color: $color05;
    .head_top_min{
      max-width: 1000px;
      margin:0 auto;
      height: 37px;
      line-height: 37px;
      display: flex;
      font-size: 12px;
      justify-content: space-between;
      .head_t_l{
        display: flex;
        align-items: center;
        width: 350px;
        img{
          display: block;
          margin-right: 10px;
        }
        span{
          display: block;
          &:nth-of-type(2){
            margin:0 33px;
          }
        }
      }
      .head_t_r{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 370px;
      }
    }
  }
  .head_mid{
    background-color: #f8f8f8;
    .head_mid_min{
      max-width: 1000px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      .head_m_l{
        display: flex;
        align-items: center;
        width: 350px;
        padding-top:50px;
        padding-bottom: 32px;
        div{
          display: block;
          width:56px;
          height: 56px;
          border-radius: 28px;
          text-align: center;
          line-height: 56px;
          background-color:$color06;
          color:#fff;
          margin-right: 23px;
        }
        dl{
          width: 260px;
          dt{
            font-size: 24px;
            span{
              font-weight: bolder;
              color:#000;
            }
          }
          dd{
            font-size:13px;
          }
        }
      }
      .head_m_r{
        display: flex;
        align-items: flex-end;
        ul{
          display: flex;
          align-items: flex-end;
          width: 31.25rem;
          padding-bottom: 32px;
          li{
            width: 25%;
            cursor: pointer;
            text-align: center;
            img{
              display: inline-block;
            }
            p{
              border-right: 2px solid $color02;
              margin-top: 5px;
              font-weight: bold;
              height: 18px;
              line-height: 18px;

            }
            &:first-of-type{
              p{
                border-right: 2px solid $color06;
                color:$color06;
              }
            }
            &:nth-of-type(2){
              p{
                color:#848484;
              }
            }
            &:nth-of-type(3){
              p{
                color:#e3e3e3;
              }
            }
            &:last-of-type{
              p{
                border:none;
                color:#e3e3e3;
              }
            }
          }
        }


      }
    }
  }
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
          .wenjian{
            .wenjian_min{
              .wenjianliebiao{
                .wenjianliebiao_left{
                  span{
                    width: 17px;
                    height: 17px;
                    display: block;
                    line-height: 17px;
                    text-align: center;
                    border-radius: 50%;
                    background-color: red;
                    position: absolute;
                    top:-8px;
                    right: -15px;
                    color:#fff;
                    font-size: 12px;
                  }
                }
                .el-checkbox__input.is-checked+.el-checkbox__label{
                  width: 100% !important;
                }
              }
            }
          }
          .shangchuan{
            .shangchuan_min{
              .registBtn{
                width: 173px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer; text-align: center;
                &:hover{
                  background-color: red;color: #fff;
                }
              }
              .registCancleBtn{
                width: 173px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer;text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .registBtn{width: 225px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer;}
  .registBtn:hover{background-color: red;color: #fff;}
  .registCancleBtn{width: 225px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer;}
  // 分享
  .sharename{
    margin-left: 150px;
    ul{
      li{
        padding:3px 4px;
        color: #3489e8;
        border:1px solid #3489e8;
        border-radius: 5px;
        position: relative;
        margin-right: 18px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        img{
          display: inline-block;
          position: absolute;
          top:-6px;
          right: -6px;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  .iconList{
    position: absolute;
    top:-10px;
    right: -40px;
    display: flex;
    align-items: center;
    li{
      margin-right: 8px;
    }
  }
  .groutul .el-checkbox__label{
    width: 100% !important;
  }
  
</style>
