<template>
  <div class="all">
    <head-common  :xiangmu = "xiangmuFlag"></head-common>
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
              <li @click="checkTab('项目日志')" class="bg-white flex justify-center items-center">
                <img src="@/assets/image/logcheck_icon.png" alt="">
                <h2>项目日志</h2>
              </li>
              <li @click="checkTab('项目文件')" class="flex justify-center items-center ">
                <img src="@/assets/image/filecheck_icon.png" alt="">
                <h2>项目文件</h2>
              </li>
              <li @click="checkTab('项目收藏')" class="flex justify-center items-center ">
                <img src="@/assets/image/project_store_icon.png" alt="">
                <h2>项目收藏</h2>
              </li>
              <li @click="checkTab('项目统计')" class="flex justify-center items-center ">
                <img src="@/assets/image/project_count_icon.png" alt="">
                <h2>项目统计</h2>
              </li>
            </ul>
          </div>
          <div class="con_min_right">
            <div class="xinxi">
              <div class="flex justify-between items-center px-10 py-10 xinxi_01">
                <div class="flex justify-center items-center">
                  <img class="mr-3 cursor-pointer" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer">返回</span>
                </div>
                <div>
                  <h2 class="text-xl font-bold">{{this.projectMsg.basic_data.title}}</h2>
                </div>
                <div @click="addLogAc" class="newadd flex items-center cursor-pointer">
                  <img class="mr-2 cursor-pointer" src="../../assets/image/rizhi_icon.png" alt="">
                  <div >添加项目日志</div>
                </div>
              </div>
              <div class="px-10 pb-10 xinxi_min">
                <div class="con_t_l">
                  <ul>
                    <li class="select">
                      <span :class="{active:ins==1}" @click="changeSelect">{{ myjobtitle }}</span>
                      <img class="ml-2" v-if="!select" src="@/assets/image/down_icon_dark.png" alt="">
                      <img class="ml-2" v-if="select" src="@/assets/image/down_icon_red.png" alt="">
                      <div class="selectbox" v-if="select">
                        <ul>
                          <li @click="chooseAboutall()">所有人</li>
                          <li v-if="Myjob.length != 0" v-for="(item, index) in Myjob" :key="index" @click="chooseAboutme(item)">{{ item.name }}</li>
                        </ul>
                      </div>
                    </li>
                    <!-- 隐藏 -->
                    <li class="selectRenWu">
                      <span :class="{active:ins==2}" @click="changeSelectRenWu">{{ changeSelectRenWuTitle }}</span>
                      <span class="missMsg hidden">{{ changeSelectNum }}</span>
                      <img class="ml-2" v-if="!selectRenWu" src="@/assets/image/down_icon_dark.png" alt="">
                      <img class="ml-2" v-if="selectRenWu" src="@/assets/image/down_icon_red.png" alt="">
                      <div class="selectRenWubox" v-if="selectRenWu">
                        <ul>
                          <li @click="chooseRenWu(item)" v-for="(item, index) in RenWu" :key="index">{{ item.name }}</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="con_t_r">
                  <div class="searchBox">
                    <input class="" v-model="searchMsg" type="text" @keydown="enterAc($event)" />
                    <img @click="searchMsgAc" src="@/assets/image/search_icon.png" alt="">
                  </div>
                </div>
              </div>
              <!-- 项目日志列表 -->
              <div v-if="projectlogall.length>0" class="px-10">
                <div>
                  <div class="flex justify-between items-center py-3 border-b relative">
                    <div>
                      <h2 class="font-bold text-base">{{this.projectMsg.basic_data.title}}</h2>
                    </div>
                    <div v-if="projectLogNum == 1" class="upIcon">
                      <img @click="openProjectContent(null)" class="cursor-pointer" src="../../assets/image/up_icon.png" alt="">
                    </div>
                    <img @click="openProjectContent(1)" class="cursor-pointer" src="../../assets/image/down_icon.png" alt="">
                  </div>
                  <div v-if="projectLogNum == 1" class="pr-10 text-sm">
                    <div v-for="(item, index) in projectlogall" :key="index">
                      <div class="flex items-center">
                        <span class="mr-3 px-1 border border-blue-500 rounded-sm text-blue-500 text-sm font-bold text-center" style="width: 55px;">{{item.userName}}</span>
                        <h2 class="leading-loose py-2">{{item.created_time}}</h2>
                      </div>

                      <div @click="openlog(item)" class="leading-loose pl-16">
                        {{item.content}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 任务日志列表 -->
              <div class="px-10">
                <div v-for="(item, index) in logall" :key="index">
                  <div class="flex justify-between items-center py-3 border-b relative">
                    <div>
                      <h2 class="font-bold text-base">{{item.taskTitle}}</h2>
                    </div>
                    <div v-if="logConNum ==item.id" class="upIcon">
                      <img @click="openContent(null)" class="cursor-pointer" src="../../assets/image/up_icon.png" alt="">
                    </div>
                    <img @click="openContent(item.id)" class="cursor-pointer" src="../../assets/image/down_icon.png" alt="">
                  </div>
                  <div v-if="logConNum == item.id" class="pr-10 text-sm">
                    <div class="flex items-center">
                      <span class="mr-3 px-1 border border-blue-500 rounded-sm text-blue-500 text-sm font-bold text-center" style="width: 55px;">{{item.userName}}</span>
                      <h2 class="leading-loose py-2">{{item.created_time}}</h2>
                    </div>

                    <div class="leading-loose pl-16">
                      <span class="cursor-pointer hover:font-bold" @click="openlog(item)">{{item.content}}</span>
                      <span v-if="logConHistoryNum == null" @click="openHistory(item.id)" class="text-blue-500 underline ml-5 cursor-pointer">打开编辑历史</span>
                      <span v-if="logConHistoryNum == item.id" @click="openHistory(null)" class="text-blue-500 underline ml-5 cursor-pointer">收起编辑历史</span>
                    </div>
                    <div v-if="logConHistoryNum == item.id">
                      <div v-if="item.data.length >0" class="px-10 py-5">
                        <el-timeline>
                          <el-timeline-item
                            v-for="($$item, $$index) in item.data"
                            :key="$$index"
                          >
                            <el-card>
                              <h4>{{$$item.created_time}}</h4>
                              <p>{{$$item.content}}</p>
                            </el-card>
                          </el-timeline-item>
                        </el-timeline>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="logall.length>0" class="w-1/2 mx-auto py-5">
                <el-pagination
                  background
                  class="my-10 text-center"
                  @current-change="handleCurrentChange"
                  :current-page.sync="page.current_page"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="page.total">
                </el-pagination>
              </div>
              <div class="mx-auto notask"  v-if="logall.length==0 && projectlogall.length ==0">
                <img class="mt-10" src="@/assets/image/notasklog.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加任务日志弹窗 -->
    <el-dialog title="" :visible.sync="dialogLog" center width="720px">
      <div class="ftext-lg text-center pb-4 pt-2">
        <span class="text-xl text-red-500">{{this.projectMsg.basic_data.title}}</span>
      </div>
      <el-form :model="logForm" id="configrenwu">
        <el-form-item label="时间" :label-width="LogLabelWidth">
          <el-date-picker
            v-model="logForm.start_time"
            type="datetime"
            value-format="yyyy-MM-dd hh:mm:ss"
            class="mr-8 input-class"
            placeholder="开始时间"
            default-time="09:00:00">
          </el-date-picker>
          <el-date-picker
            v-model="logForm.stop_time"
            value-format="yyyy-MM-dd hh:mm:ss"
            type="datetime"
            placeholder="结束时间"
            default-time="18:00:00">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="*" :label-width="LogLabelWidth">
          <el-input v-model="logForm.content" type="textarea" :rows="2" placeholder="输入日志内容" class="inputcon" autocomplete="off"></el-input>
        </el-form-item>
        <div class="w-2/3 mx-auto">
          <el-upload
            class="upload-demo"
            action="/api/sop_api/v1/files/temporaryFile"
            name="files"
            multiple
            :headers="{'Authorization':token}"
            :on-preview="handlePreview"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-between" >
        <div class="registBtn" @click="addLogBtn">提交</div>
        <div class="registCancleBtn"  @click="cancleLogBtn">取消</div>
      </div>
    </el-dialog>

    <!-- 修改任务日志弹窗 -->
    <el-dialog title="修改日志" :visible.sync="updateDialogLog" center width="720px">
      <div class="ftext-lg text-center pb-4 pt-2">
        <span class="text-xl text-red-500">{{this.logForm.taskTitle}}</span>
      </div>
      <el-form :model="logForm" id="configrenwu">
        <el-form-item label="时间" :label-width="LogLabelWidth">
          <el-date-picker
            v-model="logForm.start_time"
            type="datetime"
            value-format="yyyy-MM-dd hh:mm:ss"
            class="mr-8 input-class"
            placeholder="开始时间"
            default-time="09:00:00">
          </el-date-picker>
          <el-date-picker
            v-model="logForm.stop_time"
            value-format="yyyy-MM-dd hh:mm:ss"
            type="datetime"
            placeholder="结束时间"
            default-time="18:00:00">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="*" :label-width="LogLabelWidth">
          <el-input v-model="logForm.content" type="textarea" :rows="2" placeholder="输入日志内容" class="inputcon" autocomplete="off"></el-input>
        </el-form-item>
        <div class="w-2/3 mx-auto">
          <el-upload
            class="upload-demo"
            action="/api/sop_api/v1/files/temporaryFile"
            name="files"
            multiple
            :headers="{'Authorization':token}"
            :on-preview="handlePreview"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-between" >
        <div class="registBtn" @click="updateLogBtn">确认修改</div>
        <div class="registCancleBtn"  @click="cancleUpdateLogBtn">取消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import head_common from "@/components/partials/head_common.vue"
  import {selectOnlyProject}  from '@/api/api/requestLogin.js'  // 查询单独项目详细信息
  import {addJournal, selectProjectTaskJounalAll, selectProjectTaskJounalAllKeyword, selectProjectTaskJounalAllUserId, selectJournal, selectJournalKeyword, selectJournalUserId, updateJournal} from '@/api/api/requestLogin.js'  // 新增日志
  export default{
    name:'projectLog',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        xiangmuFlag: true, // 头部导航状态
        // 头部
        ins:1,
        Myjob: [
        ],
        RenWu:[
          {name: '倒序排列',ID:1},{name: '顺序排列',ID:2}
        ],
        select:false,
        selectRenWu:false,
        selectAllTaskFlag: true,  // 默认查询全部任务
        myjobtitle: '所有人', // 修改我负责和我发布任务的标题
        myjobId: null, // 我发布的ID
        changeSelectRenWuTitle: '顺序排列', // 修改选择任务的标题
        changeSelectNum: 0, // 当前任务数量
        changeSelectRenWuID: 1, // 修改选择任务的ID
        // 搜索
        searchMsg: '',   // 查询内容
        // 项目日志列表
        projectlogall: [],
        projectLogNum: null,
        // 任务全部日志列表
        logConNum: null, // 点击收起列表
        logConHistoryNum: null,  // 编辑历史
        logall:[],
        // 分页
        page:{
          current_page: 1,
          total: null
        },
        // 查询单独项目信息
        projectMsg: {
          basic_data:{
            title: ''
          }
        },
        // 添加日志弹窗
        dialogLog: false,
        LogLabelWidth: '120px',
        logForm: {
          taskTitle: '', //  项目任务名
          type: 1,
          dpId: localStorage.getItem('dptId'),
          status: 1,
          start_time: '',  // 开始时间
          stop_time: '',  // 结束时间
          content: '',  // 日志内容
          imgs: [],   // 上传文件
          files: []   // 预上传文件
        },
        token:'bearer ' +  localStorage.getItem('token'),
        fileList: [],
        // 修改日志弹窗
        updateDialogLog: false
      }
    },
    mounted(){
      this.getAllLog() // 获取全部任务日志
      this.getLog() // 查询日志
      this.getProjectMsg() // 查询单独项目信息
    },
    methods:{
      // 左侧导航切换
      checkTab (e) {
        if(e=='项目信息'){
          this.$router.replace("/projectXinxi")
        } else if(e=="项目任务"){
          this.$router.replace("/projectTask")
        } else if(e=="项目日志"){
          this.$router.replace("/projectLog")
        }
      },
      goBack () {
        this.$router.replace('/projectManagement')
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) { // 点击查看当前页
        this.page.current_page = val
        selectProjectTaskJounalAll({page: val}).then((data) =>{
          this.logall = data.data.data.data
          this.page.total = data.data.data.total
        })
      },
      getAllLog () { // 查询全部日志
        selectProjectTaskJounalAll({page: this.page.current_page}).then((data) =>{
          this.logall = data.data.data.data
          this.page.total = data.data.data.total
        })
      },
      getLog () { // 查询项目日志
        var dpId = localStorage.getItem('dptId')
        selectJournal({
          type: 1,
          dpId: dpId,
          status: 1,
          order: 1
        }).then((data) => {
          this.projectlogall = data.data.data
        }).catch((data) => {
          this.$router.replace('/')
        })
      },
      getProjectMsg () { // 查询单独项目详细信息
        var that = this
        var dpId = localStorage.getItem('dptId')
        selectOnlyProject(dpId).then((data) =>{
          this.projectMsg = data.data.data
          if(this.projectMsg.dptD.length != 0){
            var aa = this.projectMsg.dptD
            aa.forEach((item)=>{
              that.Myjob.push(item)
            })
          }
          if(this.projectMsg.dpt != null || this.projectMsg.dpt.length != 0){
            that.Myjob.push(this.projectMsg.dpt)
          }
        })
      },
      handleRemove(file, fileList) { // 删除日志预览图片
        this.logForm.imgs = fileList.map(item => {
          return { name: item.name, url: item.url };
        });
      },
      handlePreview(files) { // 添加日志图片
        for(var i =0;i<files.data.length;i++){
          this.logForm.files.push(files.data[i])
        }
      },
      handleSuccess(response, file, fileList) { // 添加成功返回的
        var successfile = response.data[0]
        this.logForm.imgs.push(successfile)
      },
      openlog (item) { // 点击修改日志
        localStorage.setItem('OnlyLogId', item.id)
        this.updateDialogLog = true
        this.logForm.dpId = item.id
        this.logForm.taskTitle = item.taskTitle
        this.logForm.content = item.content
        this.logForm.start_time = item.start_time
        this.logForm.stop_time = item.stop_time
        var file = item.files
        this.fileList = item.files.map(item => {
          return { name: item.name, url: item.url };
        });
        this.logForm.imgs = this.fileList
      },
      updateLogBtn () { // 点击确认修改按钮
        updateJournal({
          // dpId: this.logForm.dpId,
          content: this.logForm.content,
          status: 1,
          start_time: this.logForm.start_time,
          stop_time: this.logForm.stop_time,
          imgs: JSON.stringify(this.logForm.imgs)
        }).then((data) =>{
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.getAllLog()
          this.updateDialogLog = false
          localStorage.removeItem('OnlyLogId')
          this.logForm.start_time = ''  // 开始时间
          this.logForm.stop_time = '';  // 结束时间
          this.logForm.content = '';  // 日志内容
          this.logForm.imgs = [];   // 上传文件
          this.fileList = []
        })
      },
      cancleUpdateLogBtn () { // 取消修改按钮
        this.updateDialogLog = false
        localStorage.removeItem('OnlyLogId')
        this.logForm.start_time = ''  // 开始时间
        this.logForm.stop_time = '';  // 结束时间
        this.logForm.content = '';  // 日志内容
        this.logForm.imgs = [];   // 上传文件
        this.fileList = []
      },
      addLogAc () { // 添加项目日志按钮
        this.dialogLog = true
        this.logForm.content = ''
        this.logForm.start_time = ''
        this.logForm.stop_time = ''
        this.logForm.taskTitle = ''
        this.logForm.imgs = [];   // 上传文件
        this.fileList = []
      },
      addLogBtn () { // 提交日志
        var dpid = localStorage.getItem('dptId')
        addJournal({
          content: this.logForm.content,
          type: this.logForm.type,
          dpId: dpid,
          status: this.logForm.status,
          start_time: this.logForm.start_time,
          stop_time: this.logForm.stop_time,
          imgs: JSON.stringify(this.logForm.imgs)
        }).then((data) => {
          this.$message({
            message: '提交成功',
            type: 'success'
          });
          this.getLog()
          this.dialogLog = false
          this.logForm.start_time = ''  // 开始时间
          this.logForm.stop_time = '';  // 结束时间
          this.logForm.content = '';  // 日志内容
          this.logForm.imgs = [];   // 上传文件
          this.fileList = []
        })

      },
      cancleLogBtn () { // 取消提交日志
        this.dialogLog = false
        this.logForm.start_time = ''  // 开始时间
        this.logForm.stop_time = '';  // 结束时间
        this.logForm.content = '';  // 日志内容
        this.logForm.imgs = null;   // 上传文件
      },
      changeSelect(){ // 点击我负责的切换
        this.select = !this.select
        this.ins = 1
        this.selectRenWu = false
      },
      changeSelectRenWu(){ // 点击全部任务切换
        this.selectRenWu = !this.selectRenWu;
        this.ins = 2
        this.select = false
      },
      chooseAboutall () { // 选择所有人筛选
        this.select = false
        this.myjobtitle = '所有人';
        this.myjobId = null;
        this.selectAllTaskFlag = true
        this.getAllLog() // 获取全部任务日志
        this.getLog() // 查询日志
      },
      chooseAboutme(item) { // 选择某一项目成员查找
        this.select = false
        this.myjobtitle = item.name;
        this.myjobId = item.id;
        this.selectAllTaskFlag = false
        var dpId = localStorage.getItem('dptId')
        selectJournalUserId({
          type: 1,
          dpId: dpId,
          status: 1,
          order: 1,
          userId: this.myjobId
        }).then((data) => {
          this.projectlogall = data.data.data
          if(this.projectlogall.length !=0 ){
            if(this.logall.length ==0){
              this.projectLogNum = 1
            }else{
              this.projectLogNum = null
            }
          } else {
            this.projectLogNum = null
          }
        }).catch((data) => {
          this.$router.replace('/')
        })

        selectProjectTaskJounalAllUserId({
          page: this.page.current_page,
          userId: this.myjobId
        }).then((data) =>{
          this.logall = data.data.data.data
          this.page.total = data.data.data.total
        })

      },
      chooseRenWu(item) { // 倒叙排列
        this.changeSelectRenWuID = item.ID
        this.changeSelectRenWuTitle = item.name;
        this.selectRenWu = false
      },
      enterAc (e){ // 回车键搜索
        if(e.keyCode ==13){
          this.searchMsgAc()
        }
      },
      searchMsgAc () { // 关键字查询
        var dpId = localStorage.getItem('dptId')
        selectJournalKeyword({
          type: 1,
          dpId: dpId,
          status: 1,
          order: 1,
          content: this.searchMsg
        }).then((data) => {
          this.projectlogall = data.data.data
        }).catch((data) => {
          this.$router.replace('/')
        })

        selectProjectTaskJounalAllKeyword({
          page: this.page.current_page,
          content: this.searchMsg
        }).then((data) =>{
          this.logall = data.data.data.data
          this.page.total = data.data.data.total
        })
      },
      openProjectContent (e) { // 项目任务开关
        this.projectLogNum = e
      },
      openContent (e) { // 收起内容
        this.logConNum = e
      },
      openHistory (e) { // 打开编辑历史
        this.logConHistoryNum = e
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
      margin:0px auto 30px;
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
          .xinxi{
            .xinxi_01{
              .newadd{

              }
            }
            .xinxi_min{
              display: flex;
              justify-content: space-between;
              padding:32px;
              .con_t_l{
                width: 240px;
                >ul{
                  display: flex;
                  >li{
                    height: 20px;
                    line-height: 20px;
                    font-weight: bold;
                    &:first-of-type{
                      // border-right: 2px solid #343434;
                    }
                    &:last-of-type{
                      margin-left: 15px;
                    }
                    display: -webkit-box;
                    padding-right: 15px;
                    span{
                      display: inline;
                    }
                    img{
                      display: inline;
                    }
                  }
                  .select{
                    position: relative;
                    .selectbox{
                      margin-top:10px;
                      position: absolute;
                      top:20px;
                      z-index: 2;
                      left: 0;
                      width:100px;
                      ul{
                        background-color: $color02;
                        border-radius: 5px;
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
                  .selectRenWu{
                    display: none;
                    position: relative;
                    .missMsg{
                      display: none;
                      position: absolute;
                      top:-10px;
                      right: 23px;
                      width: 18px;
                      height: 18px;
                      text-align: center;
                      line-height: 18px;
                      border-radius: 10px;
                      color:#fff;
                      background-color: $color06;
                      font-size: 12px;
                    }
                    .selectRenWubox{
                      margin-top:10px;
                      position: absolute;
                      top:20px;
                      left: 0;
                      width:100px;
                      z-index: 2;
                      ul{
                        background-color: $color02;
                        border-radius: 5px;
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
                }
              }
              .con_t_r{
                width: 330px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .searchBox{
                  width:327px;
                  height: 32px;
                  line-height: 32px;
                  border: 1px solid #bababa;
                  border-radius: 16px;
                  display: flex;
                  align-items: center;
                  input{
                    margin-left: 16px;
                    height: 30px;
                    width:273px;
                    border:none;
                    font-size: 16px;
                    color: #4c4a4a;
                  }
                  img{
                    cursor: pointer;
                  }
                }
              }
            }
            .notask{
              padding:120px;
              img{
                margin:0 auto;
              }
            }
            .xinxi_02{

            }

          }
        }
      }
    }
  }
  .registBtn{width: 225px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .registBtn:hover{background-color: red;color: #fff;}
 .registCancleBtn{width: 225px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .upIcon{width: 11px;height: 8px;background-color: #fff;position: absolute;top:20px;right: 0;}
 .inputcon{width: 86.5% !important;}
</style>
