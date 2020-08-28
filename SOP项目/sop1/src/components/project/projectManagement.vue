<template>
  <div class="all">
    <head-common  :xiangmu = "xiangmuFlag"></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="con_top">
          <div class="con_t_l">
            <ul>
              <li class="select">
                <span @click="changeSelect">{{ myjobtitle }}</span>
                <span v-if="this.total != undefined && this.total != 0 " class="missMsg">{{ total }}</span>
                <img class="ml-2" src="@/assets/image/down_icon_dark.png" alt="">
                <div class="selectbox" v-if="select">
                  <ul>
                    <li v-for="(item, index) in Myjob" :key="index" @click="chooseAboutme(item)">{{ item.name }}</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="con_t_r">
            <div class="searchBox">
              <input class="" v-model="searchMsg" type="text" @keydown="enterAc($event)" />
              <img @click="searchList" class="cursor-pointer" src="@/assets/image/search_icon.png" alt="">
            </div>
            <div @click="addProjectAc" class="newaddBtn">新建项目</div>
          </div>
        </div>
        <div class="con_list">
          <div class="con_list_min">
            <ul>
              <li v-for="(item, index) in selectOnlyProject" :key="index">
                <div class="flex items-center con_list_mt">
                  <div class="duocuankuangBox">
                     <img v-if="myjobId == 2" src="@/assets/image/duoxuankuangqueding.png" alt="">
                  </div>
                  <div @click="goxiangqing(item)" class="con_list_m">
                    <h3 class="cursor-pointer">
                      {{ item.title }}
                    <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                    <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                    <!-- rmtIs  1风控  0 无风险 -->
                      <img v-if="item.status ==4" src="@/assets/image/guo_icon.png" alt="">
                      <img v-if="item.rmtIs ==1" src="@/assets/image/feng_icon.png" alt="">
                      <img v-if="item.status ==4" src="@/assets/image/yan_icon.png" alt="">
                      <img v-if="item.topping == 1" src="@/assets/image/ding_icon.png" alt="">
                    </h3>
                  </div>
                </div>

                <div class="w-1/4 flex-nowrap con_list_mr">
                  <div class="flex text-center con_list_mr_m">
                    <div v-if="item.dpt != null " class="font-bold px-1 border text-sm border-blue-500 text-blue-500 rounded-sm mr-2">{{ item.dpt.name }}</div>
                    <div v-for="($item, $index) in item.dptD.slice(0,2)" :key="$index" class="font-bold px-1 border text-sm border-blue-500 text-blue-500 rounded-sm mr-2">{{ $item.name }}</div>
                    <div v-if="item.dptD.length >3 " class="font-bold px-2 border text-sm border-blue-500 text-blue-500 rounded-sm mr-2">…</div>
                  </div>
                </div>
                <div class="con_list_r">
                  <ul class="justify-end">
                    <li class="mr-3" v-if="myjobId == 1">
                      <el-tooltip placement="left"  effect="light">
                        <div slot="content">
                          <p class="mb-1">项目时间：<span class="text-xs">{{ item.start_time }}---{{ item.stop_time }}</span></p>
                          <p class="mb-1">项目说明：{{ item.description }}</p>
                        </div>
                        <img src="@/assets/image/ren_01.png" alt="">
                      </el-tooltip>
                    </li>

                    <!-- 编辑任务 -->
                    <li class="mr-3" v-if="myjobId == 1">
                      <img @click="configBtn(item)" src="@/assets/image/ren_04.png" alt="">
                    </li>
                    <!-- 置顶项目 -->
                    <li class="mr-3" v-if="myjobId == 1">
                      <img v-if="item.topping == 1" @click="zhidingAc(item)" src="@/assets/image/gotop.png" alt="">
                      <img v-if="item.topping == 0" @click="zhidingAc(item)" src="@/assets/image/ungotop.png" alt="">
                    </li>
                    <!-- 删除任务 -->
                    <li class="mr-3" v-if="myjobId == 1">
                      <img @click="removeAction(item)" src="@/assets/image/ren_05.png" alt="">
                    </li>
                    <!-- 恢复任务 -->
                    <li class="mr-3" v-if="myjobId == 2 || myjobId == 9">
                      <el-popconfirm
                        title="确认恢复项目？"
                        @onConfirm="recoverAction(item)"
                      >
                        <div slot="reference">
                           <img src="@/assets/image/recovery.png" alt="">
                        </div>
                      </el-popconfirm>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="this.selectOnlyProject != undefined " class="w-1/2 pb-10 mx-auto">
            <el-pagination
                background
                class="my-10 text-center"
                layout="prev, pager, next"
                @current-change="selectProjectAc"
                :page-size="pagesize"
                :current-page.sync="currentPage"
                :total="this.total">
            </el-pagination>
          </div>
        </div>
        <div class="mx-auto notask"  v-if="this.selectOnlyProject == undefined ">
          <img class="mt-10" src="@/assets/image/noproject.png" alt="">
        </div>
      </div>
    </div>
    <!-- 新建项目弹窗 -->
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
        <div v-if="dialogConfigRenWuType==1" class="registBtn mx-auto" @click="addProjectBtn">新建项目</div>
        <div v-if="dialogConfigRenWuType==2" class="registBtn mx-auto" @click="svaeProjectBtn">保存</div>
        <div class="registCancleBtn"  @click="cancleProjectBtn">取消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import head_common from "@/components/partials/head_common.vue"
  import {selectProject, searchProject, updateProject, deleteProject, recoveryDeleteProject, addProject} from '@/api/api/requestLogin.js' // 查询项目
  import {selectUserByName} from '@/api/api/requestLogin.js' // 用户名查找用户
  import {projectCreated} from '@/api/api/requestLogin.js' // 查找项目类型

  export default{
    name:'TaskManagement',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        xiangmuFlag: true, // 头部导航状态
        name: localStorage.getItem('name'),
        userId: localStorage.getItem('userId'),
        shortName:'', // 名字两个字
        Myjob: [
          {name:'在办项目',ID:1},{name:'完结项目',ID:2},{name:'已删除项目',ID:9}
        ],
        select:false,
        myjobtitle: '在办项目', // 修改我负责和我发布任务的标题
        myjobId: 1, // 我发布的ID
        changeSelectNum: 0, // 当前任务数量
        selectOnlyProject: [], // 单独项目的数组
        searchMsg: '',
        // 分页
        first_page_url: '',
        last_page_url: '',
        next_page_url: '',
        path: '',
        total: null,
        from: 1,
        per_page: null,
        last_page: null,
        currentPage:1, //初始页
        pagesize:10,    //    每页的数据
        area: '', // 擅长领域
        pageNum: 1, // 第几页
        formLabelWidth: '150px',
        LogLabelWidth: '120px',
        dialogConfigRenWu: false, // 任务设置弹框开关
        // 模糊搜索添加成员
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [],
        // 项目类型
        dialogConfigRenWuType: null,
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
      this.pagestart()//页面初始化
      this.getCreated() // 查询项目类型
      this.remoteMethod('')
    },
    methods:{
      pagestart(){ // 初始化数据
          selectProject({
            status:1,    // 1在办 2完结 9删除
            page:this.currentPage
          }).then((data) => {
            this.selectOnlyProject = data.data.data.data
            this.total = data.data.data.total
            if (data.data.status_code == '401'){
              this.$router.replace('/')
            }
          })
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
      selectProjectAc (){ // 选择项目分类进行筛选
        selectProject({
          status: this.myjobId,    // 1在办 2完结 9删除
          page:this.currentPage
        }).then((data) => {
          this.selectOnlyProject = data.data.data.data
          this.total = data.data.data.total
        })
      },
      handleSizeChange (size) {   // 点击分页
          this.pagesize = size;
      },
      handleCurrentChange (currentPage) {    //点击哪一页
          this.currentPage = currentPage;
      },
      changeSelect(){ // 点击我负责的切换
        this.select = !this.select
      },
      chooseAboutme(item){  // 选择第一个下拉框
        this.select = false
        this.myjobtitle = item.name;
        this.myjobId = item.ID;
        this.selectProjectAc()
      },
      enterAc (e){ // 回车键搜索
        if(e.keyCode ==13){
          this.searchList()
        }
      },
      searchList(){ // 通过关键字查找任务
        searchProject({
          status: this.myjobId,    // 1在办 2完结 9删除
          title: this.searchMsg,
          page:this.currentPage
        }).then((data) => {
          this.selectOnlyProject = data.data.data.data
          this.total = data.data.data.total
        })
      },
      zhidingAc(item) { // 置顶操作
        localStorage.setItem('dptId',item.id)
        var zhiding = item.topping
        if(item.topping == 1){
          zhiding = 0
        } else {
          zhiding = 1
        }
        updateProject({
          topping: zhiding
        }).then((data) =>{
          if(zhiding==1){
            this.$message({
              message: '置顶成功',
              type: 'success'
            });
          }else{
            this.$message({
              message: '取消置顶',
              type: 'success'
            });
          }

          this.selectProjectAc()
        })
      },
      removeAction(item){ // 删除任务
        this.$confirm('删除该文件, 可在删除任务中进行恢复，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          localStorage.setItem('dptId',item.id)
          deleteProject().then((data)=>{
            this.pagestart()
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      recoverAction (item) { // 恢复项目
        localStorage.setItem('dptId',item.id)
        recoveryDeleteProject().then((data) => {
          this.myjobtitle = "在办项目"
          this.myjobId = 1
          this.pagestart()
          this.$message({
            message: '项目已恢复',
            type: 'success'
          });
        })
      },
      addProjectAc (){ // 点击新建项目按钮
        localStorage.removeItem('dptId')
        this.dialogConfigRenWu = true;
        // this.projectform.title = ''
        // this.projectform.description = ''
        // this.projectform.type = null
        // this.projectform.start_time = ''
        // this.projectform.stop_time = ''
        // this.projectform.dpt = ''
        // this.projectform.dptD = ''
        this.dialogConfigRenWuType = 1
      },
      addProjectBtn () {  // 确认新建
        var needpt = this.projectform.dpt
        needpt ="[" + needpt + "]"
        // needpt = JSON.stringify(needpt)
        addProject({
          title: this.projectform.title,
          description: this.projectform.description,
          type: this.projectform.type,
          start_time: this.projectform.start_time,
          stop_time: this.projectform.stop_time,
          dpt: needpt,
          dptD: JSON.stringify(this.projectform.dptD)
        }).then((data)=>{
          this.pagestart()
          this.dialogConfigRenWu = false;
          this.projectform.title = ''
          this.projectform.description = ''
          this.projectform.type = null
          this.projectform.start_time = ''
          this.projectform.stop_time = ''
          this.projectform.dpt = null
          this.projectform.dptD = null
        })
      },
      svaeProjectBtn () { // 确认修改
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
          this.pagestart()
          this.dialogConfigRenWu = false;
          this.projectform.title = ''
          this.projectform.description = ''
          this.projectform.type = null
          this.projectform.start_time = ''
          this.projectform.stop_time = ''
          this.projectform.dpt = null
          this.projectform.dptD = null
        })
      },
      cancleProjectBtn () { // 取消新建
        this.dialogConfigRenWu = false;
        this.projectform.title = ''
        this.projectform.description = ''
        this.projectform.type = null
        this.projectform.start_time = ''
        this.projectform.stop_time = ''
        this.projectform.dpt = ''
        this.projectform.dptD = ''
      },
      configBtn (item) {  // 点击修改项目按钮
        this.dialogConfigRenWuType = 2
        localStorage.setItem('dptId',item.id)
        this.dialogConfigRenWu = true;
        this.projectform.title = item.title;
        this.projectform.description = item.description;
        this.projectform.type = item.type
        this.projectform.start_time = item.start_time
        this.projectform.stop_time = item.stop_time
        if(item.dpt!=null){
          this.projectform.dpt = item.dpt.name
          this.undateDpt = item.dpt.id
        }
        if(item.dptD !=[]){
          var eedptD = item.dptD
          var oldList = eedptD.map(eitem => {
            return eitem.id ;
          });
          this.list = eedptD.map(eitem => {
            return eitem.name ;
          });
          this.projectform.dptD = oldList
        }
      },
      goxiangqing (item) { // 点击进入详情页面
        localStorage.setItem('dptId',item.id)
        this.$router.push({
          path:'/projectXinxi',
          query:{
            id: item.id
          }
        })
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
      box-shadow: 1px 1px 15px 1px rgba(28,9,9,0.1);
      border-radius: 5px;
      background-color: #fff;
      .con_top{
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
              .missMsg{
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
              .selectbox{
                margin-top:10px;
                position: absolute;
                top:20px;
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
          }
        }
        .con_t_r{
          width: 474px;
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
          .newaddBtn{
            width: 99px;
            height: 32px;
            border:1px solid $color06;
            color:$color06;
            line-height: 32px;
            border-radius: 16px;
            text-align: center;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
      .con_add{
        width: 100%;
        height: 83px;
        background-color: #fffaf3;
        .con_add_box{
          width: 940px;
          height: 67px;
          margin:0 auto;
          border-bottom:1px solid #bababa;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .renwu{
            width: 820px;
            margin-left:14px;
            font-size: 18px;
            color: #595656;
            border: none;
            background-color: #fffaf3;
          }
          .addRenWuBtn{
            width: 68px;
            height: 24px;
            color:$color06;
            line-height: 24px;
            text-align: center;
            border: 1px solid $color06;
            border-radius: 12px;
            font-size: 15px;
            cursor: pointer;
            &:hover{
              background-color: $color06;
              color:#fff;
            }
          }
        }
      }
      .con_list{
        width: 100%;
        background-color: #fff;
        padding-top:30px;
        h2{
          margin-left: 30px;
          width: 94px;
          font-size:18px;
          color: $color09;
          font-weight: bolder;
          position: relative;
          font-family: '黑体';
          span{
            width:18px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            font-size: 13px;
            border-radius: 9px;
            color: #fff;
            background-color: $color06;
            position: absolute;
            top:-5px;
            right: 0;
          }
        }
        .con_list_min{
          width: 100%;
          >ul{
            >li{
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 20px 50px;
              .con_list_mt{
                width: 280px;
                .duocuankuangBox{
                  margin-right: 10px;
                  img{
                    display: block;
                    margin-top: 10px;
                  }
                }
                .con_list_m{
                  h3{
                    height: 40px;
                    line-height: 40px;
                    font-weight: bold;
                    img{
                      display: inline;
                      margin-top:-15px;
                      margin-left: 5px;
                    }
                  }
                  p{
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                  }
                }
              }
              .con_list_mr{
                overflow: hidden;
                width: 280px;
                .con_list_mr_m{
                  flex-wrap: nowrap;
                }
              }
              .con_list_r{
                width: 283px;
                margin-left: 10px;
                display: flex;
                align-items: center;
                ul{
                  width: 100%;
                  display: flex;
                  align-items: center;
                  li{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                     display: block;
                     width: auto;
                     cursor: pointer;
                    }
                  }
                }
              }
              &:hover{
                background-color: #f4f4f4;
                .duocuankuang{
                  display: block;
                }
              }
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
    }
  }
  .talkicon{display: flex;align-items: center;cursor: pointer;}
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 150px;
  }
  #configrenwu .el-date-editor.el-input,  #configrenwu .el-date-editor.el-input__inner{
    width: 210px !important;
  }
  .addIconBox{position: absolute;top:12px;right: 20px;display: flex;justify-content: space-around;width: 50px;}
  .addIconBox img{cursor: pointer;}
 .registBtn{width: 225px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .registBtn:hover{background-color: red;color: #fff;}
 .registCancleBtn{width: 225px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .inputcon{width: 83.3% !important;}
 .el-dialog--center .el-dialog__body{padding:25px 25px 0!important;}
</style>
