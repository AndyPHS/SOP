<template>
  <div class="all">
    <div class="head_top w-full bg-white-500">
      <div class="head_top_min">
        <div class="head_t_l">
          <img class="ml-2" src="../assets/image/sun_icon.png" alt="">
          <span>晴</span>
          <span>13℃-25℃</span>
          <span>请注意，大风蓝色预警</span>
        </div>
        <div class="head_t_r">
           <div class="flex items-center mr-4 cursor-pointer">
             <img src="../assets/image/new_msg_icon.png" alt="">
             <img class="ml-1" src="../assets/image/down_icon.png" alt="">
           </div>
           <div class="flex items-center mr-4 cursor-pointer">
             <img src="../assets/image/date_icon.png" alt="">
             <img class="ml-1" src="../assets/image/down_icon.png" alt="">
           </div>
           <div class="flex items-center mr-4 cursor-pointer">
             <img src="../assets/image/question_icon.png" alt="">
             <img class="ml-1" src="../assets/image/down_icon.png" alt="">
           </div>
           <div class="flex items-center mr-4 cursor-pointer">
             <img src="../assets/image/msg_icon.png" alt="">
             <img class="ml-1" src="../assets/image/down_icon.png" alt="">
           </div>
           <span class="text-base ml-6 mr-4">
             常用工具
           </span>
           <div class="cursor-pointer mr-2">
             <img src="../assets/image/list_icon.png" alt="">
           </div>
        </div>
      </div>
    </div>
    <div class="head_mid w-full">
      <div class="head_mid_min">
        <div class="head_m_l">
          <div>
            {{shortName}}
          </div>
          <dl>
            <dt>下午好,<span>{{name}}</span></dt>
            <dd class="hidden">今天是公元二零二零年四月二十九日，是您的生日，祝您生日快乐！</dd>
          </dl>
        </div>
        <div class="head_m_r">
          <ul>
          	<li>
              <img src="../assets/image/renwu_icon01.png" alt="">
              <p>任务管理</p>
            </li>
            <li>
              <img src="../assets/image/xiangmu_icon02.png" alt="">
              <p>项目管理</p>
            </li>
            <li>
              <img src="../assets/image/zhishi_icon01.png" alt="">
              <p>知识管理</p>
            </li>
            <li>
              <img src="../assets/image/shiwu_icon01.png" alt="">
              <p>事务管理</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="con w-full">
      <div class="con_min">
        <div class="con_top">
          <div class="con_t_l">
            <ul>
              <li class="select">
                <span :class="{active:ins==1}" @click="changeSelect">{{ myjobtitle }}</span>
                <img class="ml-2" v-show="!select" src="../assets/image/down_icon_dark.png" alt="">
                <img class="ml-2" v-show="select" src="../assets/image/down_icon_red.png" alt="">
                <div class="selectbox" v-show="select">
                  <ul>
                    <li v-for="(item, index) in Myjob" :key="index" @click="chooseAboutme(item)">{{ item.name }}</li>
                  </ul>
                </div>
              </li>
              <li class="selectRenWu">
                <span :class="{active:ins==2}" @click="changeSelectRenWu">{{ changeSelectRenWuTitle }}</span>
                <span class="missMsg">{{ toDay.length + nearDay.length + futureDay.length + endDay.length }}</span>
                <img class="ml-2" v-show="!selectRenWu" src="../assets/image/down_icon_dark.png" alt="">
                <img class="ml-2" v-show="selectRenWu" src="../assets/image/down_icon_red.png" alt="">
                <div class="selectRenWubox" v-show="selectRenWu">
                  <ul>
                    <li @click="chooseRenWu(item)" v-for="(item, index) in RenWu" :key="index">{{ item.name }}</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="con_t_r">
            <div class="timeBox">
              <el-date-picker
                v-model="selectTime"
                type="date"
                size="small"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <div class="searchBox">
              <input class="" v-model="searchMsg" type="text">
              <img @click="searchList" src="../assets/image/search_icon.png" alt="">
            </div>
          </div>
        </div>
        <div class="con_add">
          <div class="con_add_box">
            <input class="renwu" v-model="newRenWu" placeholder="点击新建任务" type="text">
            <span class="addRenWuBtn">确定</span>
          </div>
        </div>
        <div class="con_list">
          <h2 v-if="toDay.length>0">今日任务 <span>{{ toDay.length }}</span></h2>
          <div v-if="toDay.length>0" class="con_list_min">
            <ul>
              <li  @mouseenter="enter(item.id)" @mouseleave="leave()" v-for="(item, index) in toDay" :key="index">
                <div class="duocuankuangBox">
                  <el-form ref='form' class="duocuankuang hidden">
                    <el-form-item>
                      <el-checkbox-group v-model="form.type" @change="queding">
                        <el-checkbox label="" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="con_list_i">
                  <div class="toother hidden">
                    <span>梦蝶</span>
                  </div>
                  <div class="tome hidden">
                    <span>球球</span>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <img v-show="basic_data.status==4" src="../assets/image/guo_icon.png" alt="">
                    <img src="../assets/image/feng_icon.png" alt="">
                    <img v-show="basic_data.type==3" src="../assets/image/xie_icon.png" alt="">
                    <img v-show="basic_data.status==3" src="../assets/image/yan_icon.png" alt="">
                  </h3>
                  <p>{{ item.description }}</p>
                </div>
                <div class="con_list_r">
                  <ul>
                    <li>
                      <el-tooltip placement="left"  effect="light">
                        <div slot="content">
                          <p class="mb-1">任务：{{ basic_data.title }}</p>
                          <p class="mb-1">所属项目：的点点滴滴</p>
                          <p class="mb-1">到期时间：{{ basic_data.end_time }}</p>
                          <!-- <p class="mb-1">自检项目：的点点滴滴</p> -->
                          <p class="mb-1">服务日志：的点点滴滴</p>
                          <p class="mb-1">任务耗时：2天</p>
                          <p class="mb-1">任务剩余：3天</p>
                        </div>
                        <img src="../assets/image/ren_01.png" alt="">
                      </el-tooltip>
                    </li>
                    <li>
                      <img src="../assets/image/ren_02.png" alt="">
                    </li>
                    <li>
                      <img src="../assets/image/ren_03.png" alt="">
                    </li>
                    <li>
                      <img src="../assets/image/ren_04.png" alt="">
                    </li>
                    <li>
                      <img @click="removeAction(item, index)" src="../assets/image/ren_05.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <h2 v-if="nearDay.length>0">近期任务 <span>{{ nearDay.length }}</span></h2>
          <div v-if="nearDay.length>0" class="con_list_min">
            <ul>
              <li  @mouseenter="enter(item.id)" @mouseleave="leave()" v-for="(item, index) in toDay" :key="index">
                <div class="duocuankuangBox">
                  <el-form ref='form' class="duocuankuang hidden">
                    <el-form-item>
                      <el-checkbox-group v-model="form.type" @change="queding">
                        <el-checkbox label="" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="con_list_i">
                  <div class="toother hidden">
                    <span>梦蝶</span>
                  </div>
                  <div class="tome hidden">
                    <span>球球</span>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <img v-show="basic_data.status==4" src="../assets/image/guo_icon.png" alt="">
                    <img src="../assets/image/feng_icon.png" alt="">
                    <img v-show="basic_data.type==3" src="../assets/image/xie_icon.png" alt="">
                    <img v-show="basic_data.status==3" src="../assets/image/yan_icon.png" alt="">
                  </h3>
                  <p>{{ item.description }}</p>
                </div>
                <div class="con_list_r">
                  <ul>
                    <li>
                      <el-tooltip placement="left"  effect="light">
                        <div slot="content">
                          <p class="mb-1">任务：{{ basic_data.title }}</p>
                          <p class="mb-1">所属项目：的点点滴滴</p>
                          <p class="mb-1">到期时间：{{ basic_data.end_time }}</p>
                          <!-- <p class="mb-1">自检项目：的点点滴滴</p> -->
                          <p class="mb-1">服务日志：的点点滴滴</p>
                          <p class="mb-1">任务耗时：2天</p>
                          <p class="mb-1">任务剩余：3天</p>
                        </div>
                        <img src="../assets/image/ren_01.png" alt="">
                      </el-tooltip>

                    </li>
                    <li>
                      <img src="../assets/image/ren_02.png" alt="">
                    </li>
                    <li>
                      <img src="../assets/image/ren_03.png" alt="">
                    </li>
                    <li>
                      <img src="../assets/image/ren_04.png" alt="">
                    </li>
                    <li>
                      <img @click="removeAction(item, index)" src="../assets/image/ren_05.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <h2 v-if="futureDay.length>0">未来任务 <span>{{ futureDay.length }}</span></h2>
          <div v-if="futureDay.length>0" class="con_list_min">
            <ul>
              <li  @mouseenter="enter(item.id)" @mouseleave="leave()" v-for="(item, index) in toDay" :key="index">
                <div class="duocuankuangBox">
                  <el-form ref='form' class="duocuankuang hidden">
                    <el-form-item>
                      <el-checkbox-group v-model="form.type" @change="queding">
                        <el-checkbox label="" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="con_list_i">
                  <div class="toother hidden">
                    <span>梦蝶</span>
                  </div>
                  <div class="tome hidden">
                    <span>球球</span>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <img v-show="basic_data.status==4" src="../assets/image/guo_icon.png" alt="">
                    <img src="../assets/image/feng_icon.png" alt="">
                    <img v-show="basic_data.type==3" src="../assets/image/xie_icon.png" alt="">
                    <img v-show="basic_data.status==3" src="../assets/image/yan_icon.png" alt="">
                  </h3>
                  <p>{{ item.description }}</p>
                </div>
                <div class="con_list_r">
                  <ul>
                    <li>
                      <el-tooltip placement="left"  effect="light">
                        <div slot="content">
                          <p class="mb-1">任务：{{ basic_data.title }}</p>
                          <p class="mb-1">所属项目：的点点滴滴</p>
                          <p class="mb-1">到期时间：{{ basic_data.end_time }}</p>
                          <!-- <p class="mb-1">自检项目：的点点滴滴</p> -->
                          <p class="mb-1">服务日志：的点点滴滴</p>
                          <p class="mb-1">任务耗时：2天</p>
                          <p class="mb-1">任务剩余：3天</p>
                        </div>
                        <img src="../assets/image/ren_01.png" alt="">
                      </el-tooltip>

                    </li>
                    <li>
                      <img src="../assets/image/ren_02.png" alt="">
                    </li>
                    <li>
                      <img src="../assets/image/ren_03.png" alt="">
                    </li>
                    <li>
                      <img src="../assets/image/ren_04.png" alt="">
                    </li>
                    <li>
                      <img @click="removeAction(item, index)" src="../assets/image/ren_05.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <h2 v-if="endDay.length>0">完成任务 <span>{{ endDay.length }}</span></h2>
          <div v-if="endDay.length>0" class="con_list_min">
            <ul>
              <li  @mouseenter="enter(item.id)" @mouseleave="leave()" v-for="(item, index) in toDay" :key="index">
                <div class="duocuankuangBox">
                  <div class="duocuankuang hidden">
                    <img src="../assets/image/duoxuankuangqueding.png" alt="">
                  </div>
                </div>
                <div class="con_list_i">
                  <div class="toother hidden">
                    <span>梦蝶</span>
                  </div>
                  <div class="tome hidden">
                    <span>球球</span>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <img v-show="basic_data.status==4" src="../assets/image/guo_icon.png" alt="">
                    <img src="../assets/image/feng_icon.png" alt="">
                    <img v-show="basic_data.type==3" src="../assets/image/xie_icon.png" alt="">
                    <img v-show="basic_data.status==3" src="../assets/image/yan_icon.png" alt="">
                  </h3>
                  <p>{{ item.description }}</p>
                </div>
                <div class="con_list_r">
                  <ul>
                    <li>
                      <img src="../assets/image/recover_icon.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="mx-auto notask" v-show="notask">
            <img class="mt-10" src="../assets/image/notask.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="任务设置" :visible.sync="dialogConfigRenWu" center width="720px">
      <el-form :model="renwuform" id="configrenwu">
        <el-form-item label="任务名称" :label-width="formLabelWidth">
          <el-input v-model="renwuform.title" class="inputcon" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="任务介绍" :label-width="formLabelWidth">
          <el-input v-model="renwuform.description" class="inputcon" ></el-input>
        </el-form-item>
        <!-- 所属项目及分组 暂无接口 -->
        <!-- <el-form-item label="所属项目及分组" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="BuMenSelect" @change="BuMenChange" placeholder="请选择">
            <el-option
              v-for="(item, index) in BuMen"
              :key="index"
              :label="index"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="XiangMuOrFenZuSelecter"  placeholder="请选择">
            <el-option
              v-for="(item, index) in XiangMuOrFenZuAll"
              :key="index"
              :label="item.title"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="负责人" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="dptBuMenSelect" @change="chooseDpt" placeholder="请选择">
            <el-option
              v-for="(item, index) in BuMen"
              :key="index"
              :label="index"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="renwuform.dpt" placeholder="请选择">
            <el-option
              v-for="(item, index) in PersonAll"
              :key="index"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务成员" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="dptDBuMenSelect" @change="choosedptD" placeholder="请选择">
            <el-option
              v-for="(item, index) in BuMen"
              :key="index"
              :label="index"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="renwuform.dptD" placeholder="请选择" multiple="multiple">
            <el-option
              v-for="(item, index) in PersonAll"
              :key="index"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核人" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="examineIdBuMenSelect"  @change="chooseexamineId" placeholder="请选择">
            <el-option
              v-for="(item, index) in BuMen"
              :key="index"
              :label="index"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="renwuform.examineId" @change="chooseLeader" placeholder="请选择">
            <el-option
              v-for="(item, index) in PersonAll"
              :key="index"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="renwuform.start_time"
            type="datetime"
            value-format="yyyy-MM-dd hh:mm:ss"
            class="mr-3 input-class"
            placeholder="开始时间"
            default-time="09:00:00">
          </el-date-picker>
          <el-date-picker
            v-model="renwuform.stop_time"
            value-format="yyyy-MM-dd hh:mm:ss"
            type="datetime"
            placeholder="结束时间"
            default-time="18:00:00">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="是否自动延期" :label-width="formLabelWidth">
          <el-radio-group v-model="renwuform.autoDelay">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 优先级 暂尚未做接口 -->
        <!-- <el-form-item label="优先级" :label-width="formLabelWidth">
          <el-select v-model="renwuform.orderId" placeholder="请选择">
            <option value="1">紧急</option>
            <option value="2">普通</option>
          </el-select>
        </el-form-item> -->
       <!-- <el-form-item label="提醒方式" :label-width="formLabelWidth">
          <el-select v-model="renwuform.orderId" placeholder="请选择">
            <option value="1">紧急</option>
            <option value="2">普通</option>
          </el-select>
        </el-form-item> -->
        <!-- 提醒时间 尚未接口 -->
        <!-- <el-form-item label="提醒时间" :label-width="formLabelWidth">
          <el-select v-model="renwuform.orderId" placeholder="请选择">
            <option value="1">任务到期时</option>
            <option value="2">5分钟前</option>
            <option value="3">10分钟前</option>
            <option value="4">30分钟前</option>
            <option value="5">1小时前</option>
          </el-select>
        </el-form-item> -->
        <!-- 提醒对象 确实接口 -->
        <!-- <el-form-item label="提醒对象" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="BuMenSelect"  placeholder="请选择">
            <el-option
              v-for="(item, index) in BuMen"
              :key="index"
              :label="index"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="renwuform.examineId"  placeholder="请选择">
            <el-option
              v-for="(item, index) in PersonAll"
              :key="index"
              :label="item.title"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer pb-2" >
        <div class="registBtn mx-auto" @click="addTaskBtn">保存</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {addTask} from '@/api/api/requestLogin.js' // 新增任务
  import {deleteTask} from '@/api/api/requestLogin.js' // 删除任务
  import {selectTask} from '@/api/api/requestLogin.js' // 查询任务列表
  import {selectTaskOnly} from '@/api/api/requestLogin.js' // 查询任务详情信息
  import {createdDet} from '@/api/api/requestLogin.js' // 查找部门
  import {selectDet} from '@/api/api/requestLogin.js' // 查找部门成员
  export default{
    name:'TaskManagement',
    data() {
      return {
        name: localStorage.getItem('name'),
        shortName:'', // 名字两个字
        Myjob: [
          {name:'我负责的',ID:1},{name:'我发布的',ID:2}
        ],
        RenWu:[
          {name: '全部任务',ID:1},{name: '今日任务',ID:2},{name: '近期任务',ID:3},{name: '未来任务',ID:4},{name: '完成任务',ID:5},{name: '待分配任务',ID:6},{name: '已删除任务',ID:7}
        ],
        ins:1,
        select:false,
        selectRenWu:false,
        myjobtitle: '我负责的', // 修改我负责和我发布任务的标题
        myjobId: 1, // 我发布的ID
        changeSelectRenWuTitle: '全部任务', // 修改选择任务的标题
        changeSelectRenWuID: 1, // 修改选择任务的ID
        selectTime: '',
        searchMsg: '',
        newRenWu: '',
        toDay:[], // 今日任务
        nearDay: [], // 近期任务
        futureDay: [], // 未来任务
        endDay: [], // 完结任务
        basic_data: {}, // 任务详情信息
        notask: false, // 没有任务的时候替代图片
        form: {
          type: ''
        },
        formLabelWidth: '150px',
        dialogConfigRenWu: true, // 任务设置弹框开关
        XiangMuOrFenZuSelecter: '', // 选择具体项目
        XiangMuOrFenZuAll: [], // 项目总分组
        BuMenSelect: '', // 选定部门
        dptBuMenSelect: '', // 选定负责人部门
        dptDBuMenSelect: '', // 选定任务成员部门
        examineIdBuMenSelect: '', // 选定审核人部门
        BuMen: {}, // 部门列表
        PersonAll: {}, // 部门全部成员
        renwuform: { // 任务设置表单
          title: '', // 标题
          description: '', // 介绍
          type: null,  // 类型（1为单独项目 2为项目任务）
          dptId: null,  // 项目Id 任务类型为2的时候添加
          groupId: null, // 任务组id 任务类型为2的时候添加
          autoDelay: null, // 是否自动延期
          start_time: '', // 开始时间 格式为yyyy-MM-dd HH:mm:ss
          stop_time: '', // 结束时间 格式为yyyy-MM-dd HH:mm:ss
          orderId: null,  // 排序Id
          examineId: null, // 审核人
          dpt: null, // 负责人
          dptD: [],   // 成员[1,2,3]
        },
      }
    },
    mounted(){
      this.pagestart()//页面初始化
      this.GetBuMen() // 查找部门
    },
    methods:{
      addTaskBtn(){  // 新增任务
        addTask({
          title: this.renwuform.title,
          description: this.renwuform.description,
          type: 1,
          autoDelay: this.renwuform.autoDelay,
          start_time: this.renwuform.start_time,
          stop_time: this.renwuform.stop_time,
          dpt: this.renwuform.dpt,
          dptD: JSON.stringify(this.renwuform.dptD),
          examineId: this.renwuform.examineId,
        }).then((data)=>{
          this.renwuform = {};
        })
      },
      pagestart(){
        this.shortName = this.name.slice(1)  // 截取用户姓名后两位
        selectTask({
          why: 1,
          type: 1
        }).then((data)=>{  // 查询任务列表
          this.toDay = data.data.data.toDay;
          this.nearDay = data.data.data.nearDay;
          this.futureDay = data.data.data.futureDay;
          this.endDay = data.data.data.endDay;

        })
      },
      enter(e){  // 鼠标移入任务查看按钮触发
        selectTaskOnly(e).then((data)=>{
          this.basic_data = data.data.data.basic_data;
        })
      },
      leave(){  // 鼠标离开任务查看按钮触发
        this.basic_data = {};
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
      chooseAboutme(item){
        this.select = false
        this.myjobtitle = item.name;
        this.myjobId = item.ID;
        selectTask({
          why: this.myjobId,
          type: this.changeSelectRenWuID
        }).then((data)=>{  // 查询任务列表
          this.toDay = data.data.data.toDay;
          this.nearDay = data.data.data.nearDay;
          this.futureDay = data.data.data.futureDay;
          this.endDay = data.data.data.endDay;

        })
      },
      chooseRenWu(item){  // 选择任务按钮触发
        this.changeSelectRenWuID = item.ID;
        this.toDay = [];
        this.nearDay = [];
        this.futureDay = [];
        this.endDay = [];
        selectTask({
          why: this.myjobId,
          type: item.ID
        }).then((data)=>{  // 查询任务列表
          this.toDay = data.data.data.toDay;
          this.nearDay = data.data.data.nearDay;
          this.futureDay = data.data.data.futureDay;
          this.endDay = data.data.data.endDay;
          this.changeSelectRenWuTitle = item.name;
          if(this.toDay.length==0&&this.nearDay.length==0&&this.futureDay.length==0&&this.endDay.length==0){
            this.notask = true;
          }else{
            this.notask = false;
          }
          // if(item.ID==1){
          //   this.pagestart()
          //   this.changeSelectRenWuTitle = '全部任务'
          // }else if(item.ID==2){
          //   selectTask().then((data)=>{  // 查询任务列表
          //     this.toDay = data.data.data.toDay;
          //     this.nearDay = [];
          //     this.futureDay = [];
          //     this.endDay = [];
          //   })
          //   this.changeSelectRenWuTitle = '今日任务'
          // }else if(item.ID==3){
          //   selectTask().then((data)=>{  // 查询任务列表
          //     this.toDay = [];
          //     this.nearDay = data.data.data.nearDay;
          //     this.futureDay = [];
          //     this.endDay = [];
          //   })
          //   this.changeSelectRenWuTitle = '近期任务'
          // }else if(item.ID==4){
          //   selectTask().then((data)=>{  // 查询任务列表
          //     this.toDay = [];
          //     this.nearDay = [];
          //     this.futureDay = data.data.data.futureDay;
          //     this.endDay = [];
          //   })
          //   this.changeSelectRenWuTitle = '未来任务'
          // }else if(item.ID==5){
          //   selectTask().then((data)=>{  // 查询任务列表
          //     this.toDay = [];
          //     this.nearDay = [];
          //     this.futureDay = [];
          //     this.endDay =  data.data.data.endDay;
          //   })
          //   this.changeSelectRenWuTitle = '完成任务'
          // }else if(item.ID==6){
          //   selectTask().then((data)=>{  // 查询任务列表
          //     this.toDay = [];
          //     this.nearDay = [];
          //     this.futureDay = [];
          //     this.endDay =  [];
          //   })
          //   this.changeSelectRenWuTitle = '待分配任务'
          // }else if(item.ID==7){
          //   selectTask().then((data)=>{  // 查询任务列表
          //     this.toDay = [];
          //     this.nearDay = [];
          //     this.futureDay = [];
          //     this.endDay =  [];
          //   })
          //   this.changeSelectRenWuTitle = '已删除任务'
          // }
        })
        this.selectRenWu = false
      },
      searchList(){
        this.searchMsg = '';
        this.selectTime = '';
      },
      queding(){ // 选择前面确定多选框
        if(this.form.type){
          this.basic_data.status = 2;
          console.log(this.basic_data.status)
        }else{
          this.basic_data.status = 0;
        }
      },
      removeAction(item, index){
        this.$confirm('删除该文件, 可在删除任务中进行恢复，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          deleteTask(item.id).then((data)=>{
            if(this.changeSelectRenWuTitle=='全部任务'){
              this.pagestart()
            }else if(this.changeSelectRenWuTitle=='今日任务'){
              this.toDay.splice(index,1)
            }else if(this.changeSelectRenWuTitle=='近期任务'){
              this.nearDay.splice(index,1)
            }else if(this.changeSelectRenWuTitle=='未来任务'){
              this.futureDay.splice(index,1)
            }else if(this.changeSelectRenWuTitle=='完成任务'){
              this.endDay.splice(index,1)
            }
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
      GetBuMen(){ // 获取部门
        createdDet().then((data)=>{
          this.BuMen = data.data.data.permissions_department
        })
      },
      chooseDpt(){ // 获取负责人
        this.PersonAll = {}
        selectDet(this.dptBuMenSelect).then((data)=>{
          this.PersonAll = data.data.data
        })
      },
      choosedptD(){ // 获取任务成员
        this.PersonAll = {}
        selectDet(this.dptDBuMenSelect).then((data)=>{
          this.PersonAll = data.data.data
        })
      },
      chooseexamineId(){
        this.PersonAll = {}
        selectDet(this.examineIdBuMenSelect).then((data)=>{
          this.PersonAll = data.data.data
        })
      },
      chooseLeader(){
        console.log(this.renwuform.examineId)
      },
      BuMenChange(){
        console.log(this.BuMenSelect)
      },
      XiangMuOrFenZuChange(){
        console.log(1)
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
              &:first-of-type{
                border-right: 2px solid red;
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
              .selectRenWubox{
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
          width: 490px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .timeBox{
            width: 140px;
          }
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
              color: #dcdcdc;
            }
            img{
              cursor: pointer;
            }
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
            color: #dcdcdc;
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
          ul{
            >li{
              width: 100%;
              // height: 83px;
              line-height: 83px;
              display: flex;
              .duocuankuangBox{
                width: 64px;
                height: 83px;
                padding-top:20px;
                text-align: right;
                img{
                  display: block;
                  margin-left: 40px;
                  margin-top: 15px;
                }
              }
              .con_list_i{
                display: flex;
                align-items: center;
                margin:0 10px;
                .toother{
                  width: 40px;
                  height: 40px;
                  text-align: center;
                  line-height: 30px;
                  background:url(../assets/image/toother.png)no-repeat;
                  span{
                    color:#3489e8;
                    display: inline;
                    font-size: 14px;
                    font-weight: bold;
                  }
                }
                .tome{
                  width: 40px;
                  height: 40px;
                  text-align: center;
                  line-height: 45px;
                  background:url(../assets/image/tome.png)no-repeat;
                  span{
                    color:#00baa2;
                    display: inline;
                    font-size: 14px;
                    font-weight: bold;
                  }
                }
              }
              .con_list_m{
                margin-top:10px;
                width: 650px;
                h3{
                  height: 30px;
                  line-height: 40px;
                  font-weight: bold;
                  img{
                    display: inline;
                    margin-top:-15px;
                    margin-left: 10px;
                  }
                }
                p{
                  height: 30px;
                  line-height: 30px;
                  font-size: 14px;
                }
              }
              .con_list_r{
                width: 183px;
                margin-left: 50px;
                display: flex;
                align-items: center;
                ul{
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
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
        .notask{
          padding:120px;
          img{
            margin:0 auto;
          }
        }
      }
    }
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 150px;
  }
  #configrenwu .el-date-editor.el-input,  #configrenwu .el-date-editor.el-input__inner{
    width: 210px !important;
  }
 .registBtn{width: 225px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .registBtn:hover{background-color: indianred;color: #fff;}
 .inputcon{width: 83.3% !important;}
 .el-dialog--center .el-dialog__body{padding:25px 25px 0!important;}
</style>
