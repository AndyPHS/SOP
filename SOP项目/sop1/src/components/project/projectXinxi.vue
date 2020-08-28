<template>
  <div class="all">
    <head-common  :xiangmu = "xiangmuFlag"></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="flex con_minall">
          <div class="con_min_left">
            <ul>
              <li @click="checkTab('项目信息')" class="bg-white flex justify-center items-center">
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
              <li class="flex justify-center items-center ">
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
            <div v-if="xinxiFlag" class="xinxi">
              <div class="flex justify-between items-center px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3 cursor-pointer" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer">返回</span>
                </div>
                <div class="flex justify-center items-center">
                  <img @click="goCheckproject" class="mr-3 cursor-pointer" src="@/assets/image/duoxuankuang.png" alt="">
                  <h2 class="text-xl font-bold">{{projectMsg.basic_data.title}}</h2>
                </div>
                <div>
                  <el-dropdown>
                    <span class="el-dropdown-link text-base">
                      项目管理<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="taolun" width="100px">
                      <div class="a" @click="taolun" style="width: 100px;cursor: pointer;font-size:14px;text-align:center;line-height:30px">讨论管理</div>
                      <!-- <div class="a b" disabled style="width: 100px;font-size:14px;text-align:center;line-height:30px">发起讨论</div> -->
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
              <div class="px-10 pb-10 xinxi_min">
                <div class="flex py-3 justify-start hidden">
                  <span class="w-1/5 text-center text-base font-bold">风控预警</span>
                  <div class="w-4/5 text-red-500 text-base">
                    2019-10-30 张力虹 上报风控：当事人原件丢失
                  </div>
                </div>
                <div class="flex py-3 justify-start relative">
                  <span class="w-1/5 text-center text-base font-bold">项目信息</span>
                  <div class="w-3/5 text-sm">
                    <div class="pb-2">
                      <span class="font-bold">项目类型：</span>
                      <span v-if="projectMsg.basic_data.type == 1">诉讼项目</span>
                      <span v-else-if="projectMsg.basic_data.type == 2">非诉项目</span>
                      <span v-else-if="projectMsg.basic_data.type == 9">其他项目</span>
                    </div>
                    <div class="pb-2"><span class="font-bold">项目说明：</span><span>{{projectMsg.basic_data.description}}</span></div>
                    <div class="w-full flex items-center">
                      <span class="font-bold">团队成员：</span>
                      <ul class="flex flex-wrap items-center mt-3">
                        <li v-if="projectMsg.dptD.length !=0" v-for="(item, index) in projectMsg.dptD" :key="index" class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">{{item.name}}</li>
                        <li v-if="projectMsg.dptD.length ==0" class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">暂无</li>
                      </ul>
                    </div>
                    <div class="pb-2"><span class="font-bold">项目时间：</span><span>{{projectMsg.basic_data.start_time}} -- {{projectMsg.basic_data.stop_time}}</span></div>
                    <div class="pb-2"><span class="font-bold">项目天数：</span><span class="text-yellow-600 hidden">30天/</span>{{this.duringDay}}天</div>
                  </div>
                  <div class="w-1/5 text-right mr-5 "><span @click="updateAc" class="cursor-pointer hover:font-bold">修改信息</span></div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base font-bold">最新日志</span>
                  <div class="w-4/5 pr-32 text-sm">
                    <div v-if="projectMsg.journal != null" class="flex items-center">
                      <div class="mr-3">{{projectMsg.journal.update_time}}</div>
                      <div class="mr-3">{{projectMsg.journal.name}}</div>
                      <div>{{projectMsg.journal.content}}</div>
                    </div>
                    <div v-else>
                      无
                    </div>
                  </div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base font-bold">任务安排</span>
                  <div class="w-4/5 pr-32 text-sm">
                   <div v-if="projectMsg.task != null" class="flex items-center">
                     <div class="mr-3">{{projectMsg.task.start_time}}</div>
                     <div class="mr-3">{{projectMsg.task.name}}</div>
                     <div>{{projectMsg.task.title}}</div>
                   </div>
                   <div v-else>
                     无
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="jinduFlag" class="rizhi ">
              <div class="flex justify-between items-center px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goMsg" class="text-lg cursor-pointer">返回</span>
                </div>
                <div class="flex justify-center items-center">
                  <h2 class="text-2xl font-bold">确认管辖法院</h2>
                </div>
                <div class="flex justify-center items-center"></div>
              </div>
              <div class="px-20 py-10 rizhi_min flex justify-around items-center">
                <div class="w-4/5">
                  <el-progress :text-inside="true" :stroke-width="22" :percentage="this.jindu.project_time" status="warning"></el-progress>
                </div>
                <div class="w-1/5 text-center">
                  <div>已完成<span class="text-red-500 text-xl font-bold ml-2">{{this.jindu.project_time}}%</span></div>
                </div>
              </div>
              <div class="px-10 py-10">
                <div class="text-left text-base">
                  <h2 class="font-bold">检查清单</h2>
                  <div class="pl-20">
                    <ul>
                      <li v-if="this.jindu.project_time ==100" class="leading-loose py-2 pt-10 flex items-center"><img class="mr-2" src="@/assets/image/duigou_green_icon.png" alt=""><span>已完成全部任务</span></li>
                      <li v-else class="leading-loose py-2 flex items-center"><img class="mr-2" src="@/assets/image/close_red_big_icon.png" alt=""><span>未完成全部任务</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div v-if="this.jindu.project_time ==100" class="pb-20">
                <div class="hidden flex w-1/3 mx-auto items-center">
                  <img class="mr-3" src="../../assets/image/tanhao_icon.png" alt="">
                  <div class="font-bold text-xl text-red-500">本项目尚未完成  无法结束</div>
                </div>
                <div class="text-center py-10">
                  <h2 class="text-blue-500 font-bold">本项目所有内容已完成，点击确认后完成项目</h2>
                  <div @click="overProjectAc" class="registBtn text-center mx-auto my-10">确认</div>
                </div>
              </div>
              <div v-else class="px-10 pb-10">
                <div class="text-left text-base">
                  <h2 class="font-bold">未完成事项</h2>
                  <div class="pl-20 mt-5 flex justify-start" v-if="this.jindu.task_pp_data.length != 0">
                    <ul class="w-3/5">
                      <li v-for="(item, index) in this.jindu.task_pp_data" :key="index" class="leading-loose py-1 flex items-center text-red-500"><span class="font-bold mr-10 w-2/3 overflow-hidden whitespace-no-wrap">{{item.title}}</span>任务  未完成</li>
                    </ul>
                    <div @click="dealTaskAc" class="underline mt-2 text-blue-500 cursor-pointer">前往处理</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 修改项目 -->
    <el-dialog title="项目设置" :visible.sync="dialogConfigRenWu" center width="720px">
      <el-form :model="projectform" id="configrenwu">
        <el-form-item label="项目名称" :label-width="formLabelWidth">
          <el-input v-model="projectform.title" class="inputcon" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目介绍" :label-width="formLabelWidth">
          <el-input v-model="projectform.description" class="inputcon" ></el-input>
        </el-form-item>
        <!-- 所属项目及分组 暂无接口 -->
        <el-form-item label="项目类型" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="projectform.type"  placeholder="请选择项目">
            <el-option
             v-for="(value,key,index) in created"
             :key="index"
             :label="key"
             :value="value">
             </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="projectform.start_time"
            type="datetime"
            value-format="yyyy-MM-dd hh:mm:ss"
            class="mr-3 input-class"
            placeholder="开始时间"
            default-time="09:00:00">
          </el-date-picker>
          <el-date-picker
            v-model="projectform.stop_time"
            value-format="yyyy-MM-dd hh:mm:ss"
            type="datetime"
            placeholder="结束时间"
            default-time="18:00:00">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="负责人" :label-width="formLabelWidth">
          <el-select
              v-model="projectform.dpt"
              value-key="id"
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="任务成员" :label-width="formLabelWidth" class="relative">
          <el-select
              class="w-4/5"
              v-model="projectform.dptD"
              value-key="id"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-between" >
        <div class="registBtn mx-auto" @click="svaeProjectBtn">保存</div>
        <div class="registCancleBtn"  @click="cancleProjectBtn">取消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import head_common from "@/components/partials/head_common.vue"
  import {selectOnlyProject, selectUserByName, projectCreated, updateProject} from '@/api/api/requestLogin.js'
  import {selectProjectTime,completeProject} from '@/api/api/requestLogin.js' // 首选项任务完成进度
  export default{
    name:'projectXinxi',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        xiangmuFlag: true, // 头部导航状态
        LogLabelWidth: '120px',
        formLabelWidth: '150px',
        projectId: null, // 本项目的Id
        duringDay: null, // 项目所用天数
        jindu:{},        // 项目进度
        // 本项目信息
        basic_data: {},
        projectMsg: {
          basic_data:{
            title: '',
            type: null,
            description: ''
          },
          dpt: null,
          dptD: [],
          journal: null,
          task: {}
        },
        xinxiFlag: true,  // 任务信息默认显示
        jinduFlag: false,  // 任务日志默认隐藏
        dialogConfigRenWu: false, // 任务设置弹框开关
        // 模糊搜索添加成员
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [],
        // 项目类型
        created: {},
        projectform: { // 项目表单
          title: '', // 标题
          description: '', // 介绍
          type: null,  // 类型1 2 9
          start_time: '', // 开始时间 格式为yyyy-MM-dd HH:mm:ss
          stop_time: '', // 结束时间 格式为yyyy-MM-dd HH:mm:ss
          dpt: null, // 负责人
          dptD: [],   // 成员[1,2,3]
        },
        undateDpt: null,  // 点击修改项目时候暂存的负责人ID
      }
    },
    mounted(){
      this.getRouterData()
      this.getCreated()
      this.remoteMethod('')
    },
    methods:{
      goCheckproject () { //检测项目是否完成
        this.jinduFlag = true
        this.xinxiFlag = false
      },
      remoteMethod(query) { // 模糊搜索
        var that = this
        selectUserByName({name:query}).then((data)=>{
          that.states = data.data.data
          that.options = that.states.map(item => {
            return { value: item.id, label: item.name };
          });
        })
      },
      getCreated () { // 查询项目类型
        projectCreated().then((data) =>{
          this.created = data.data.data.project_type
        })
      },
      updateAc () { // 点击修改信息按钮
        this.dialogConfigRenWu = true
        // this.getRouterData()
      },
      svaeProjectBtn () { //确认修改
        var needpt = this.projectform.dpt
        if(typeof needpt == "string"){
          needpt = this.undateDpt
        }
        needpt ="[" + needpt + "]"
        // needpt = JSON.stringify(needpt)
        updateProject({
          title: this.projectform.title,
          description: this.projectform.description,
          type: this.projectform.type,
          start_time: this.projectform.start_time,
          stop_time: this.projectform.stop_time,
          dpt: needpt,
          dptD: JSON.stringify(this.projectform.dptD)
        }).then((data)=>{
          this.getRouterData()
          this.dialogConfigRenWu = false;
        })
      },
      cancleProjectBtn () { // 取消修改
        this.dialogConfigRenWu = false;
      },
      goMsg () { // 关闭项目进度页面
        this.jinduFlag = false
        this.xinxiFlag = true
      },
      getRouterData () { // 获取URL中的项目id以及给项目表单赋值
        var that = this
        this.projectId = localStorage.getItem('dptId')
        var ad = localStorage.getItem('dptId')
        selectOnlyProject(ad).then((data) => {
           that.projectMsg = data.data.data;
           that.basic_data = data.data.data.basic_data;
           this.getDaysBetween(that.basic_data.start_time, that.basic_data.stop_time)
           this.projectform.title = that.basic_data.title;
           this.projectform.description = that.basic_data.description;
           this.projectform.type = that.basic_data.type;
           this.projectform.start_time = that.basic_data.start_time;
           this.projectform.stop_time = that.basic_data.stop_time;
           if(data.data.data.dpt != null){
             this.projectform.dpt = data.data.data.dpt.name;
             this.undateDpt = data.data.data.dpt.id;
           }
           var eedptD = that.projectMsg.dptD;
           var oldList = eedptD.map(eitem => {
             return eitem.id ;
           });
           this.list = eedptD.map(eitem => {
             return eitem.name ;
           });
           this.projectform.dptD = oldList
        }).catch((data)=>{
        })
        selectProjectTime().then((data)=>{
          this.jindu = data.data.data
        })
      },
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
      goBack () { // 返回任务管理页面
        this.$router.replace("/projectManagement")
      },
      taolun () { // 发起项目讨论
        this.$router.push({
          path:'/taskTalk',
          query:{
            id: this.projectId
          }
        })
      },
      getDaysBetween (dateString1,dateString2) { // 获取两个时间差
         var  startDate = Date.parse(dateString1);
         var  endDate = Date.parse(dateString2);
         var days =(endDate - startDate)/(1*24*60*60*1000);
         this.duringDay = days
         return  days;
      },
      dealTaskAc () {// 前往处理未完成事项
        this.$router.replace("/projectTask")
      },
      overProjectAc () { // 确认完成项目
        completeProject().then((data)=>{
          if(data.data.status_code == 200){
            // this.$message({
            //   message: '项目已恢复',
            //   type: 'success'
            // });
            this.$router.replace("/projectManagement")
          }
        })
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
            .xinxi_min{

            }
          }
          .rizhi{
            .rizhi_min{

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
</style>
