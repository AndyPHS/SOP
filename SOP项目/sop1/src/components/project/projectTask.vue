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
              <li @click="checkTab('项目任务')" class="bg-white flex justify-center items-center">
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
                <div class="newadd">
                  <div @click="newaddAc" class="newaddmin">新建任务</div>
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
                    <li class="selectRenWu">
                      <span :class="{active:ins==2}" @click="changeSelectRenWu">{{ changeSelectRenWuTitle }}</span>
                      <span class="missMsg">{{ changeSelectNum }}</span>
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
                    <img @click="searchList" src="@/assets/image/search_icon.png" alt="">
                  </div>
                  <div class="flex items-center cursor-pointer">
                    <div @click="openFenzuAc">任务分组</div>
                    <div class="hidden">全部展开</div>
                  </div>
                </div>
              </div>
              <!-- 未分组列表 -->
              <div v-if="selectAllTaskFlag" class="xinxi_02 px-10 py-5">
                <div class="cursor-pointer flex items-center">
                  <h2 class="font-bold relative">未分组 <span class="num text-xs">{{this.weifenzu.length}}</span></h2>
                  <img class="ml-5" src="../../assets/image/down_icon.png" alt="">
                  <img class="hidden" src="../../assets/image/up_icon.png" alt="">
                </div>
              </div>
              <div v-if="selectAllTaskFlag" class="xinxi_03">
                <ul>
                  <li v-for="(item, index) in weifenzu" :key="index">
                    <div class="duocuankuangBox">
                       <img v-if="changeSelectRenWuID == 1 " @click="addLogOne(item)" src="@/assets/image/duoxuankuang.png" alt="">
                       <img v-if="changeSelectRenWuID == 2" src="@/assets/image/duoxuankuangqueding.png" alt="">
                    </div>
                    <div class="con_list_i mr-2" >
                      <span class="px-1 border border-blue-500 rounded-sm text-blue-500 font-bold">
                        {{item.userName}}
                      </span>
                    </div>
                    <div @click="goxiangqing(item)" class="con_list_m cursor-pointer">
                      <h3 class="cursor-pointer">
                        {{ item.title }}
                      <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                      <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                      <!-- rmtIs  1风控  0 无风险 -->
                        <img v-if="item.status==4" src="@/assets/image/guo_icon.png" alt="">
                        <img  v-if="item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                        <img v-if="item.type==3" src="@/assets/image/xie_icon.png" alt="">
                        <img v-if="item.status==3" src="@/assets/image/yan_icon.png" alt="">
                      </h3>
                    </div>
                    <div class="con_list_r">
                      <ul>
                        <li v-if="changeSelectRenWuID == 1 ">
                          <el-tooltip placement="left"  effect="light">
                            <div slot="content">
                              <p class="mb-1">项目时间：{{ item.start_time }}--{{item.stop_time}}</p>
                              <p class="mb-1">项目说明：{{item.description}}</p>
                            </div>
                            <img src="@/assets/image/ren_01.png" alt="">
                          </el-tooltip>
                        </li>
                        <!-- 任务日志 -->
                        <li v-if="changeSelectRenWuID == 1 ">
                          <img @click="addLog(item)" src="@/assets/image/ren_02.png" alt="">
                        </li>
                        <!-- 发起讨论/发起协作 -->
                        <li v-if="changeSelectRenWuID == 1 ">
                          <el-dropdown trigger="click">
                            <img class="el-dropdown-link" src="@/assets/image/ren_03.png" alt="">
                            <el-dropdown-menu>
                              <el-dropdown-item class="clearfix talkicon">
                                <img class="mr-2" src="@/assets/image/team_icon.png" alt="">
                                <span @click="InitiateDiscussion">发起讨论</span>
                              </el-dropdown-item>
                              <!-- <el-dropdown-item class="clearfix talkicon">
                                <img class="mr-2" src="@/assets/image/team_icon.png" alt="">
                                <span @click="InitiateCollaboration">
                                  发起协作
                                </span>
                              </el-dropdown-item> -->
                            </el-dropdown-menu>
                          </el-dropdown>
                        </li>
                        <!-- 编辑任务 -->
                        <li v-if="changeSelectRenWuID == 1 ">
                          <img @click="configBtn(item)" src="@/assets/image/ren_04.png" alt="">
                        </li>
                        <!-- 删除任务 -->
                        <li v-if="changeSelectRenWuID ==1">
                          <img @click="removeAction(item, index)" src="@/assets/image/ren_05.png" alt="">
                        </li>
                        <!-- 恢复任务 -->
                        <li v-if="changeSelectRenWuID == 2">
                          <el-popover
                            placement="top"
                            width="160"
                            v-model="visible">
                            <p>确认恢复此任务？</p>
                            <div style="text-align: right; margin: 0">
                              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                              <el-button type="primary" size="mini"  @click="recoverAction(item.id)">确定</el-button>
                            </div>
                            <img slot="reference" src="@/assets/image/resetCover_icon.png" alt="">
                          </el-popover>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- 分组列表 -->
              <div v-if="selectAllTaskFlag">
                <div v-for="(item, index) in groupList" :key="index">
                  <div class="xinxi_02 px-10 py-5">
                    <div class="cursor-pointer flex items-center">
                      <h2 class="font-bold relative">{{item.title}} <span class="num text-xs">{{item.data.length}}</span></h2>
                      <img class="ml-5" src="../../assets/image/down_icon.png" alt="">
                      <img class="hidden" src="../../assets/image/up_icon.png" alt="">
                    </div>
                  </div>
                  <div v-if="item.data.length > 0 " class="xinxi_03">
                    <ul>
                      <li v-for="($item, $index) in item.data" :key="$index">
                        <div class="duocuankuangBox">
                           <img v-if="changeSelectRenWuID == 1 " @click="addLogOne($item)" src="@/assets/image/duoxuankuang.png" alt="">
                           <img v-if="changeSelectRenWuID == 2" src="@/assets/image/duoxuankuangqueding.png" alt="">
                        </div>
                        <div class="con_list_i mr-2" >
                          <span class="px-1 border border-blue-500 rounded-sm text-blue-500 font-bold">
                            {{$item.userName}}
                          </span>
                        </div>
                        <div @click="goxiangqing($item)" class="con_list_m cursor-pointer">
                          <h3 class="cursor-pointer">
                            {{ $item.title }}
                          <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                          <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                          <!-- rmtIs  1风控  0 无风险 -->
                            <img v-if="$item.status==4" src="@/assets/image/guo_icon.png" alt="">
                            <img  v-if="$item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                            <img v-if="$item.type==3" src="@/assets/image/xie_icon.png" alt="">
                            <img v-if="$item.status==3" src="@/assets/image/yan_icon.png" alt="">
                          </h3>
                        </div>
                        <div class="con_list_r">
                          <ul>
                            <li v-if="changeSelectRenWuID == 1 ">
                              <el-tooltip placement="left"  effect="light">
                                <div slot="content">
                                  <p class="mb-1">项目时间：{{ $item.start_time }}--{{$item.stop_time}}</p>
                                  <p class="mb-1">项目说明：{{$item.description}}</p>
                                </div>
                                <img src="@/assets/image/ren_01.png" alt="">
                              </el-tooltip>
                            </li>
                            <!-- 任务日志 -->
                            <li v-if="changeSelectRenWuID == 1 ">
                              <img @click="addLog($item)" src="@/assets/image/ren_02.png" alt="">
                            </li>
                            <!-- 发起讨论/发起协作 -->
                            <li v-if="changeSelectRenWuID == 1 ">
                              <el-dropdown trigger="click">
                                <img class="el-dropdown-link" src="@/assets/image/ren_03.png" alt="">
                                <el-dropdown-menu>
                                  <el-dropdown-item class="clearfix talkicon">
                                    <img class="mr-2" src="@/assets/image/team_icon.png" alt="">
                                    <span @click="InitiateDiscussion">发起讨论</span>
                                  </el-dropdown-item>
                                  <!-- <el-dropdown-item class="clearfix talkicon">
                                    <img class="mr-2" src="@/assets/image/team_icon.png" alt="">
                                    <span @click="InitiateCollaboration">
                                      发起协作
                                    </span>
                                  </el-dropdown-item> -->
                                </el-dropdown-menu>
                              </el-dropdown>
                            </li>
                            <!-- 编辑任务 -->
                            <li v-if="changeSelectRenWuID == 1 ">
                              <img @click="configBtn($item)" src="@/assets/image/ren_04.png" alt="">
                            </li>
                            <!-- 删除任务 -->
                            <li v-if="changeSelectRenWuID ==1">
                              <img @click="removeAction($item, $index)" src="@/assets/image/ren_05.png" alt="">
                            </li>
                            <!-- 恢复任务 -->
                            <li v-if="changeSelectRenWuID == 2">
                              <el-popover
                                placement="top"
                                width="160"
                                v-model="visible">
                                <p>确认恢复此任务？</p>
                                <div style="text-align: right; margin: 0">
                                  <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                  <el-button type="primary" size="mini"  @click="recoverAction($item.id)">确定</el-button>
                                </div>
                                <img slot="reference" src="@/assets/image/resetCover_icon.png" alt="">
                              </el-popover>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- 条件筛选后列表 -->
              <div  v-if="selectAllTaskFlag ==false" class="xinxi_03">
                <ul>
                  <li v-for="(item, index) in typeRenWu" :key="index">
                    <div class="duocuankuangBox">
                       <img v-if="changeSelectRenWuID == 1 " @click="addLogOne(item)" src="@/assets/image/duoxuankuang.png" alt="">
                       <img v-if="changeSelectRenWuID == 2" src="@/assets/image/duoxuankuangqueding.png" alt="">
                    </div>
                    <div class="con_list_i mr-2" >
                      <span v-if="item.userName!=null " class="px-1 border border-blue-500 rounded-sm text-blue-500 font-bold">
                        {{item.userName}}
                      </span>
                      <span v-else class="px-1 border border-blue-500 rounded-sm text-blue-500 font-bold">
                        无
                      </span>
                    </div>
                    <div @click="goxiangqing(item)" class="con_list_m cursor-pointer">
                      <h3 class="cursor-pointer">
                        {{ item.title }}
                      <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                      <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                      <!-- rmtIs  1风控  0 无风险 -->
                        <img v-if="item.status==4" src="@/assets/image/guo_icon.png" alt="">
                        <img  v-if="item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                        <img v-if="item.type==3" src="@/assets/image/xie_icon.png" alt="">
                        <img v-if="item.status==3" src="@/assets/image/yan_icon.png" alt="">
                      </h3>
                    </div>
                    <div class="con_list_r">
                      <ul>
                        <li v-if="changeSelectRenWuID == 1 ">
                          <el-tooltip placement="left"  effect="light">
                            <div slot="content">
                              <p class="mb-1">项目时间：{{ item.start_time }}--{{item.stop_time}}</p>
                              <p class="mb-1">项目说明：{{item.description}}</p>
                            </div>
                            <img src="@/assets/image/ren_01.png" alt="">
                          </el-tooltip>
                        </li>
                        <!-- 任务日志 -->
                        <li v-if="changeSelectRenWuID == 1 ">
                          <img @click="addLog(item)" src="@/assets/image/ren_02.png" alt="">
                        </li>
                        <!-- 发起讨论/发起协作 -->
                        <li v-if="changeSelectRenWuID == 1 ">
                          <el-dropdown trigger="click">
                            <img class="el-dropdown-link" src="@/assets/image/ren_03.png" alt="">
                            <el-dropdown-menu>
                              <el-dropdown-item class="clearfix talkicon">
                                <img class="mr-2" src="@/assets/image/team_icon.png" alt="">
                                <span @click="InitiateDiscussion">发起讨论</span>
                              </el-dropdown-item>
                              <!-- <el-dropdown-item class="clearfix talkicon">
                                <img class="mr-2" src="@/assets/image/team_icon.png" alt="">
                                <span @click="InitiateCollaboration">
                                  发起协作
                                </span>
                              </el-dropdown-item> -->
                            </el-dropdown-menu>
                          </el-dropdown>
                        </li>
                        <!-- 编辑任务 -->
                        <li v-if="changeSelectRenWuID == 1 ">
                          <img @click="configBtn(item)" src="@/assets/image/ren_04.png" alt="">
                        </li>
                        <!-- 删除任务 -->
                        <li v-if="changeSelectRenWuID ==1">
                          <img @click="removeAction(item, index)" src="@/assets/image/ren_05.png" alt="">
                        </li>
                        <!-- 恢复任务 -->
                        <li v-if="changeSelectRenWuID == 2">
                          <el-popover
                            placement="top"
                            width="160"
                            v-model="visible">
                            <p>确认恢复此任务？</p>
                            <div style="text-align: right; margin: 0">
                              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                              <el-button type="primary" size="mini"  @click="recoverAction(item.id)">确定</el-button>
                            </div>
                            <img slot="reference" src="@/assets/image/resetCover_icon.png" alt="">
                          </el-popover>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 任务分组 -->
    <el-dialog :title="this.projectMsg.basic_data.title" :visible.sync="fenzudialog" center width="620px" class="fenzudialog">
      <div class="px-8 text-center fenzudialog_top">
        <h2 class="pb-3 text-xl text-red-500 font-bold">任务分组</h2>
        <ul class="px-10 mx-auto">
          <li v-if="fenzuAll.length !=0" v-for="(item, index) in fenzuAll" :key='index' class="flex justify-between  py-2">
            <div class="w-2/3 pl-2 text-left text-base">{{item.title}}</div>
            <div class="flex items-center">
              <img @click="removeFenzuAc(item, index)" class="mr-2 cursor-pointer" src="../../assets/image/huishou_icon.png" alt="">
              <img v-if="fenzuAll.length >1" @click="upmoveFenzuAc(item,index)" class="mr-2 cursor-pointer" src="../../assets/image/goup_icon.png" alt="">
              <img v-if="fenzuAll.length >1" @click="downmoveFenzuAc(item,index)" class="cursor-pointer" src="../../assets/image/godown_icon.png" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-between items-center" >
        <div class="left w-3/4">
          <input class="border py-2 rounded pl-2" v-model="fenzuName" type="text">
        </div>
        <div @click="addFenzuAc" class="right">确定</div>
      </div>
    </el-dialog>
    <!-- 任务设置 -->
    <el-dialog title="任务设置" :visible.sync="dialogConfigRenWu" center width="720px">
      <el-form :model="taskform" id="configrenwu">
        <el-form-item label="任务名称" :label-width="formLabelWidth">
          <el-input v-model="taskform.title" class="inputcon" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="任务介绍" :label-width="formLabelWidth">
          <el-input v-model="taskform.description" class="inputcon" ></el-input>
        </el-form-item>
        <!-- 所属项目及分组 暂无接口 -->
        <el-form-item label="选择分组" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="taskform.groupId"  placeholder="请选择项目">
            <el-option
             v-for="(item,index) in fenzuAll"
             :key="index"
             :label="item.title"
             :value="item.id">
             </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="taskform.start_time"
            type="datetime"
            value-format="yyyy-MM-dd hh:mm:ss"
            class="mr-3 input-class"
            placeholder="开始时间"
            default-time="09:00:00">
          </el-date-picker>
          <el-date-picker
            v-model="taskform.stop_time"
            value-format="yyyy-MM-dd hh:mm:ss"
            type="datetime"
            placeholder="结束时间"
            default-time="18:00:00">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="负责人" :label-width="formLabelWidth">
          <el-select
              v-model="taskform.dpt"
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
              v-model="taskform.dptD"
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
        <el-form-item label="优先级" :label-width="formLabelWidth">
          <el-select v-model="taskform.first" placeholder="请选择">
            <el-option label="紧急" value="1"></el-option>
            <el-option label="普通" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div>
        <div class="pt-3 border-t-2 flex">
          <div class="w-1/5 mt-2 text-right">自检项</div>
          <div class="w-4/5 pl-4">
            <ul>
              <li v-for="(item, index) in InspectionTaskAll" :key="index" class="flex justify-around py-2">
                <p class="w-5/6">{{ item.title }}</p>
                <div class="w-1/6">
                  <img class="mr-3 inline-block" @click="removeInspectionTask(item.id,index)" src="@/assets/image/delete_icon.png" alt="">
                  <!-- <img class="inline-block" src="@/assets/image/add_icon.png" alt=""> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex mt-5 justify-around">
          <input type="text" v-model="InspectionTaskTitle" placeholder="添加自检项" class="border w-3/5 ml-32 text-base pl-2 py-1">
          <el-button type="primary"  size="small" @click="addInspectionTaskAc" plain>添加</el-button>
        </div>

      </div>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-between" >
        <div v-if="dialogConfigRenWuType==1" class="registBtn mx-auto" @click="addTaskBtn">新建任务</div>
        <div v-if="dialogConfigRenWuType==2" class="registBtn mx-auto" @click="svaeTaskBtn">保存</div>
        <div class="registCancleBtn"  @click="cancleTaskBtn">取消</div>
      </div>
    </el-dialog>
    <!-- 任务日志弹窗 -->
    <el-dialog title="" :visible.sync="dialogLog" center width="720px">
      <div class="flex justify-center items-center py-2">
        <img class="mr-2" src="@/assets/image/duoxuankuangqueding.png" alt="">
        <span class="text-xl text-red-500">{{selectedTaskTitle}}</span>
      </div>
      <h2 class="text-lg text-center pb-4 pt-2">{{this.projectMsg.basic_data.title}}</h2>
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
      <div>
        <div class="pt-3 ">
          <div class="w-1/5 my-4 text-right">自检项</div>
          <div class="w-4/5 pl-32">
            <el-checkbox-group
              v-model="logForm.zijianxiang">
              <el-checkbox v-for="(item, index) in InspectionTaskAll" :label="item.title" :key="index" @change="undateInspectionTask(item.id)" >{{item.title}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>

      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-around" >
        <div class="registBtn mx-auto" @click="addLogBtn">提交</div>
        <div class="registCancleBtn"  @click="cancleLogBtn">取消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import head_common from "@/components/partials/head_common.vue"
  import {projectTask, projectTaskType} from '@/api/api/requestLogin.js' // 查看全部项目任务
  import {recoveryDeleteTask,addTask,updateTask, deleteTask} from '@/api/api/requestLogin.js' // 恢复任务
  import {selectTaskOnly} from '@/api/api/requestLogin.js' // 查询单独任务
  import {selectProjectGroup, addProjectGroup, deleteProjectGroup, mvGroup} from '@/api/api/requestLogin.js' // 查询分组
  import {selectInspectionTask, deleteInspectionTask, addInspectionTask,updateInspectionTaskStatus} from '@/api/api/requestLogin.js'
  import {addJournal}  from '@/api/api/requestLogin.js' // 日志接口

  import {selectOnlyProject, selectUserByName, projectCreated, updateProject} from '@/api/api/requestLogin.js'
  export default{
    name:'projectTask',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        xiangmuFlag: true, // 头部导航状态
        visible:false, // 恢复任务
        LogLabelWidth: '120px',
        formLabelWidth: '150px',
        projectId: null, // 本项目的Id
        // 头部导航切换
        ins:1,
        Myjob: [
        ],
        RenWu:[
          {name: '待办任务',ID:1},{name: '结束任务',ID:2}
        ],
        groupList: [],  // 分组任务
        weifenzu: [],   // 未分组任务
        typeRenWu: [],  // 条件筛选任务
        select:false,
        selectRenWu:false,
        selectAllTaskFlag: true,  // 默认查询全部任务
        myjobtitle: '所有人', // 修改我负责和我发布任务的标题
        myjobId: null, // 我发布的ID
        changeSelectRenWuTitle: '待办任务', // 修改选择任务的标题
        changeSelectNum: 0, // 当前任务数量
        changeSelectRenWuID: 1, // 修改选择任务的ID
        selectOnlyTask: [], // 单独任务的数组
        selectOnlyTaskFlag: false, // 单独任务列表的开关
        searchMsg: '',
        // 分组弹窗
        fenzudialog: false,
        fenzuAll: [], // 分组数据
        fenzuName: '',  // 添加分组名
        // 本项目信息
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
        dialogConfigRenWu: false, // 任务设置弹框开关
        dialogConfigRenWuType: null, // 判断是新建还是修改
        // 模糊搜索添加成员
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [],
        // 项目类型
        selectRenwuId: null, //所选中的任务的id
        created: {},
        taskform: { // 任务表单
          title: '', // 标题
          description: '', // 介绍
          groupId: null,  // 类型
          start_time: '', // 开始时间 格式为yyyy-MM-dd HH:mm:ss
          stop_time: '', // 结束时间 格式为yyyy-MM-dd HH:mm:s
          first: null, // 优先级 1紧急 2普通
          dpt: null, // 负责人
          dptD: [],   // 成员[1,2,3]
        },
        undateDpt: null,  // 点击修改项目时候暂存的负责人ID
        // 任务日志弹窗字段
        InspectionTaskAll: [], // 任务自检项
        InspectionTaskTitle: '', // 自检项title
        InspectionTaskTitleAll: [], // 新建任务时候自检项暂存数组
        selectedTaskTitle: '',
        dialogLog: false,  // 任务日志弹窗
        checkedLog: false, // 是否完成
        logForm: {
          start_time: '',  // 开始时间
          stop_time: '',  // 结束时间
          content: '',  // 日志内容
          files: [],   // 上传文件
          imgs: [],
          zijianxiang: [], // 自检项
          // checkedzijian: []
        },
        token:'bearer ' +  localStorage.getItem('token'),
        fileList: []
      }
    },
    mounted(){
      this.getProjectTask() // 获取全部项目任务
      this.getProjectGroup() // 获取分组
      this.getRouterData()
      this.getCreated()
      this.remoteMethod('')
    },
    methods:{
      getProjectTask () { // 查询全部项目任务
        projectTask().then((data)=>{
          this.groupList = data.data.data.groupList;
          this.weifenzu = data.data.data.weifenzu;
          if (data.data.status_code == '401'){
            this.$router.replace('/')
          }
        }).catch((data) =>{

        })
      },
      getProjectGroup () { // 查询分组
        selectProjectGroup().then((data)=>{
          this.fenzuAll = data.data.data
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
      newaddAc () {// 新建任务按钮
        this.dialogConfigRenWuType = 1
        this.dialogConfigRenWu = true
        this.InspectionTaskAll = []
        this.taskform = {}
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
        this.getProjectTask()
      },
      chooseAboutme(item) { // 选择第一个下拉框
        this.select = false
        this.myjobtitle = item.name;
        this.myjobId = item.id;
        this.selectAllTaskFlag = false
        projectTaskType({
          userId:this.myjobId,
          type: this.changeSelectRenWuID
        }).then((data)=>{
          this.typeRenWu = data.data.data
          this.changeSelectNum = this.typeRenWu.length
        })
      },
      addLogOne (item) { // 添加任务日志
        this.checkedLog = false
        this.dialogLog = true
        this.selectInspectionTaskAction(item.id)
        this.selectedTaskTitle = item.title
      },
      goxiangqing (item) { // 点击进入详情页面
        this.$router.push({
          path:'/TaskCon',
          query:{
            id: item.id
          }
        })
      },
      addLog (item) { // 添加日志弹窗
        this.dialogLog = true
        this.checkedLog = false
        this.selectInspectionTaskAction(item.id)
      },
      handleRemove(file, fileList) { // 删除日志预览图片
        console.log(file, fileList);
      },
      handlePreview(file) { // 添加日志图片
        for(var i =0;i<files.data.length;i++){
          this.logForm.files.push(files.data[i])
        }
      },
      handleSuccess(response, file, fileList) { // 添加成功返回的
        var successfile = response.data[0]
        this.logForm.imgs.push(successfile)
      },
      undateInspectionTask (id) { // 更新自检项状态
        updateInspectionTaskStatus(id).then((data)=>{})
      },
      addLogBtn () { // 提交日志
        addJournal({
          content: this.logForm.content,
          type: 2,
          dpId: localStorage.getItem("selectRenwuId"),
          status: 1,
          start_time: this.logForm.start_time,
          stop_time: this.logForm.stop_time,
          imgs: JSON.stringify(this.logForm.imgs)
        }).then((data) => {
          this.$message({
            message: '提交成功',
            type: 'success'
          });
          this.dialogLog = false
          this.logForm.start_time = ''  // 开始时间
          this.logForm.stop_time = '';  // 结束时间
          this.logForm.content = '';  // 日志内容
          this.logForm.imgs = [];   // 上传文件
          this.logForm.zijianxiang = []; // 自检项
          this.fileList = []
        })
      },
      cancleLogBtn () { // 取消提交日志
        this.dialogLog = false
        this.logForm.start_time = ''  // 开始时间
        this.logForm.stop_time = '';  // 结束时间
        this.logForm.content = '';  // 日志内容
        this.logForm.file = null;   // 上传文件
        this.logForm.zijianxiang = []; // 自检项
      },
      chooseRenWu(item) {// 选择任务按钮触发
        this.selectOnlyTaskFlag = true
        this.selectAllTask = false
        this.changeSelectRenWuID = item.ID
        this.changeSelectRenWuTitle = item.name;
        this.selectRenWu = false
        this.selectAllTaskFlag = false
        if(this.myjobId != null){
          projectTaskType({
            userId: this.myjobId,
            type: this.changeSelectRenWuID
          }).then((data)=>{
            this.typeRenWu = data.data.data
            this.changeSelectNum = this.typeRenWu.length
          })
        } else {
          projectTaskType({
            type: this.changeSelectRenWuID
          }).then((data)=>{
            this.typeRenWu = data.data.data
            this.changeSelectNum = this.typeRenWu.length
          })
        }
      },
      enterAc (){ // 回车搜索
        if(e.keyCode ==13){
          this.searchList()
        }
      },
      searchList() { // 通过关键字查找任务
        this.selectAllTaskFlag = false
        projectTaskType({
          title:this.searchMsg
        }).then((data)=>{
          this.typeRenWu = data.data.data
          this.changeSelectNum = this.typeRenWu.length
        })
      },
      openFenzuAc () { // 点击任务分组按钮
        this.fenzudialog = true
      },
      addFenzuAc (){ // 添加分组
        addProjectGroup({
          title: this.fenzuName,
          type: 1,
          status: 1
        }).then((data) => {
          this.fenzuName = ""
          this.getProjectGroup()
          this.getProjectTask()
        })
      },
      removeFenzuAc (item, index) { // 删除分组
        deleteProjectGroup(item.id).then((data)=>{
          if(data.data.status_code != 200){
            this.$message({
              showClose: true,
              message: data.data.message,
              type: 'error'
            });
          }else {
            this.getProjectGroup()
            this.getProjectTask()
          }
        }).catch((data) => {
          this.$message({
            showClose: true,
            message: data.data.message,
            type: 'error'
          });
        })
      },
      upmoveFenzuAc (item, index) { // 上移动
        if(index ==0){
          this.$message({
            showClose: true,
            message: '已经是到头了，你要上天么',
            type: 'warning'
          });
        } else {
          mvGroup({
            id1: item.id,
            id2: this.fenzuAll[index-1].id
          }).then((data) => {
            this.getProjectGroup()
            this.getProjectTask()
          })
        }
      },
      downmoveFenzuAc (item, index) { // 下移动分组
        if (index == this.fenzuAll.length-1){
          this.$message({
            showClose: true,
            message: '我是有底线的，谢谢',
            type: 'warning'
          });
        } else {
          mvGroup({
            id1: item.id,
            id2: this.fenzuAll[index+1].id
          }).then((data) => {
            this.getProjectGroup()
            this.getProjectTask()
          })
        }
      },
      configBtn (item) { // 点击修改信息按钮
        this.dialogConfigRenWuType = 2
        this.dialogConfigRenWu = true
        localStorage.setItem('selectRenwuId',item.id)
        selectTaskOnly(item.id).then((data) =>{
          this.taskform.title = data.data.data.basic_data.title;
          this.taskform.description = data.data.data.basic_data.description;
          if(data.data.data.basic_data.groupId ==0 || data.data.data.basic_data.groupId ==null){
            this.taskform.groupId = null;  //分组
          } else {
            this.taskform.groupId = data.data.data.basic_data.groupId;  //分组
          }

          this.taskform.start_time = data.data.data.basic_data.start_time;  // 开始时间
          this.taskform.stop_time = data.data.data.basic_data.stop_time;  // 结束时间
          if(data.data.data.basic_data.first==1){
            this.taskform.first = '紧急'
          } else if(data.data.data.basic_data.first==2){
            this.taskform.first = '普通'
          }
          var eedptD = data.data.data.dptD;
          var oldList = eedptD.map(eitem => {
            return eitem.id ;
          });
          this.list = eedptD.map(eitem => {
            return eitem.name ;
          });
          this.taskform.dptD = oldList
          if(data.data.data.dpt != null){
            this.taskform.dpt = data.data.data.dpt[0].name;
            this.undateDpt = data.data.data.dpt[0].id;
          }
        })
        this.selectRenwuId = item.id
        this.selectInspectionTaskAction (item.id)
      },
      addTaskBtn () {  // 确认新建
        var needpt = this.taskform.dpt
        needpt ="[" + needpt + "]"
        // needpt = JSON.stringify(needpt)
        addTask({
          title: this.taskform.title,
          description: this.taskform.description,
          type: 2,
          dptId: localStorage.getItem('dptId'),
          groupId: this.taskform.groupId,
          start_time: this.taskform.start_time,
          stop_time: this.taskform.stop_time,
          first: this.taskform.first,
          dpt: needpt,
          dptD: JSON.stringify(this.taskform.dptD)
        }).then((data)=>{
          localStorage.setItem('selectRenwuId',data.data.data)
          console.log(data.data.data)
          this.InspectionTaskTitleAll.forEach((item)=>{
            addInspectionTask({
              title: item
            }).then((data) => {
            })
          })

          this.getProjectTask()
          this.dialogConfigRenWu = false;
          this.taskform.title = ''
          this.taskform.description = ''
          this.taskform.type = null
          this.taskform.start_time = ''
          this.taskform.stop_time = ''
          this.taskform.dpt = null
          this.taskform.dptD = null
          this.taskform.groupId = null
        })
      },
      svaeTaskBtn () { //确认修改
        var needpt = this.taskform.dpt
        if(typeof needpt == "string"){
          needpt = this.undateDpt
        }
        needpt ="[" + needpt + "]"
        if(this.taskform.first == '紧急'){
          this.taskform.first = 1
        } else if(this.taskform.first == '普通'){
          this.taskform.first = 2
        }
        updateTask({
          title: this.taskform.title,
          description: this.taskform.description,
          type: 2,
          dptId: localStorage.getItem('dptId'),
          groupId: this.taskform.groupId,
          start_time: this.taskform.start_time,
          stop_time: this.taskform.stop_time,
          first: this.taskform.first,
          dpt: needpt,
          dptD: JSON.stringify(this.taskform.dptD)
        }).then((data)=>{
          this.getProjectTask()
          this.dialogConfigRenWu = false;
          this.taskform.title = ''
          this.taskform.description = ''
          this.taskform.type = null
          this.taskform.start_time = ''
          this.taskform.stop_time = ''
          this.taskform.dpt = null
          this.taskform.dptD = null
          this.taskform.groupId = null
        })
      },
      cancleTaskBtn () { // 取消修改
        this.dialogConfigRenWu = false;
        this.taskform.title = ''
        this.taskform.description = ''
        this.taskform.type = null
        this.taskform.start_time = ''
        this.taskform.stop_time = ''
        this.taskform.dpt = ''
        this.taskform.dptD = []
      },
      removeAction (item, index) { // 删除任务
        this.$confirm('确认删除该任务?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          deleteTask(item.id).then((data)=>{
            this.getProjectTask()
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            projectTaskType({
              userId:this.myjobId,
              type: this.changeSelectRenWuID
            }).then((data)=>{
              this.typeRenWu = data.data.data
              this.changeSelectNum = this.typeRenWu.length
            })
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      getRouterData () { // 获取URL中的项目id以及给项目表单赋值
        var that = this
        this.projectId = localStorage.getItem('dptId')
        selectOnlyProject(this.projectId).then((data) => {
           this.projectMsg = data.data.data;
           if(this.projectMsg.dptD.length != 0){
             var aa = this.projectMsg.dptD
             aa.forEach((item)=>{
               that.Myjob.push(item)
             })
           }
           if(this.projectMsg.dpt != null || this.projectMsg.dpt.length != 0){
             that.Myjob.push(this.projectMsg.dpt)
           }
           this.taskform.title = this.projectMsg.basic_data.title;
           this.taskform.description = this.projectMsg.basic_data.description;
           this.taskform.type = this.projectMsg.basic_data.type;
           this.taskform.start_time = this.projectMsg.basic_data.start_time;
           this.taskform.stop_time = this.projectMsg.basic_data.stop_time;
           var eedptD = this.projectMsg.dptD;
           var oldList = eedptD.map(eitem => {
             return eitem.id ;
           });
           this.list = eedptD.map(eitem => {
             return eitem.name ;
           });
           this.taskform.dptD = oldList
           if(this.projectMsg.dpt != null){
             this.taskform.dpt = this.projectMsg.dpt.name;
             this.undateDpt = this.projectMsg.dpt.id;
           }
        }).catch((data)=>{
        })
      },
      // 左侧导航切换
      checkTab (e) {  // 左侧导航切换
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

      InitiateDiscussion(){ // 发起讨论
        alert("发起讨论")
      },
      InitiateCollaboration(){ // 发起协作
        alert('发起协作')
      },
      recoverAction (e) { // 恢复任务
        localStorage.setItem('selectRenwuId',e)
        recoveryDeleteTask().then((data) => {
          this.pagestart()
          this.visible = false
          this.$message({
            message: '任务已恢复',
            type: 'success'
          });
        })
      },
      selectInspectionTaskAction (e) { // 查询自检项
        selectInspectionTask(e).then((data) => {
          if(data.data.status_code ==200 ){
            this.InspectionTaskAll = data.data.data
          }
        })
      },
      removeInspectionTask (id, index) { // 删除任务自检项
        if (this.dialogConfigRenWuType==2){
          deleteInspectionTask(id).then((data) => {
            this.selectInspectionTaskAction (this.selectRenwuId)
          })
        } else {
          this.InspectionTaskTitleAll.splice(index,1)
          this.InspectionTaskAll.splice(index, 1)
        }

      },
      addInspectionTaskAc () { // 添加任务自检项
        if (this.dialogConfigRenWuType==2){
          addInspectionTask({
            title: this.InspectionTaskTitle
          }).then((data) => {
            this.selectInspectionTaskAction (this.selectRenwuId)
            this.InspectionTaskTitle = ''
          })
        } else {
          this.InspectionTaskTitleAll.push(this.InspectionTaskTitle)

          this.InspectionTaskAll.push({
            title: this.InspectionTaskTitle
          })
          this.InspectionTaskTitle = ''
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
                .newaddmin{
                  width: 97px;
                  height: 32px;
                  text-align: center;
                  line-height: 32px;
                  border:1px solid $color06;
                  border-radius: 16px;
                  font-size: 16px;
                  color: $color06;
                  cursor: pointer;
                }
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
                      border-right: 2px solid #343434;
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
                width: 420px;
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
            .xinxi_02{

            }
            .xinxi_03{
              width: 100%;
              ul{
                >li{
                  width: 100%;
                  line-height: 83px;
                  display: flex;
                  align-items: center;
                  padding-left: 20px;
                  .duocuankuangBox{
                    width: 64px;
                    height: 83px;
                    line-height: 83px;
                    // padding-top:20px;
                    text-align: right;
                    display: flex;
                    align-items: center;
                    img{
                      display: block;
                      margin:0 auto;
                      // margin-left: 40px;
                      // margin-top: 15px;
                    }
                  }
                  .con_list_i{
                    width: 60px;
                    text-align: center;
                    .toother{
                      width: 40px;
                      height: 40px;
                      text-align: center;
                      line-height: 30px;
                      background:url(../../assets/image/toother.png)no-repeat;
                      span{
                        color:#3489e8;
                        display: inline;
                        font-size: 10px;
                        font-weight: bold;
                      }
                    }
                    .tome{
                      width: 40px;
                      height: 40px;
                      text-align: center;
                      line-height: 45px;
                      background:url(../../assets/image/tome.png)no-repeat;
                      span{
                        color:#00baa2;
                        display: inline;
                        font-size: 10px;
                        font-weight: bold;
                      }
                    }
                  }
                  .con_list_m{
                    margin-left: 20px;
                    width: 400px;
                    h3{
                      height: 30px;
                      line-height: 30px;
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
                    margin-left: 10px;
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
                        width: 36.5px;
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
        }
      }
    }
  }
.registBtn{width: 225px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .registBtn:hover{background-color: red;color: #fff;}
 .registCancleBtn{width: 225px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer;}
 .inputcon{width: 83.3% !important;}
 .num{width: 18px;height: 18px;line-height: 18px;text-align: center;border-radius: 50%;background-color: $color06;color: white;position: absolute;top:-8px;right: -17px;}
 .talkicon{display: flex;align-items: center;cursor: pointer;}
 .addIconBox{position: absolute;top:12px;right: 20px;display: flex;justify-content: space-around;width: 50px;}
 .addIconBox img{cursor: pointer;}
 .fenzudialog{
   .fenzudialog_top{
     padding-bottom: 20px;
     border-bottom: 1px solid #dcdcdc;
     ul{
       li{
         height: 42px;
         margin-bottom: 10px;
        &:hover{
          border:1px solid #dcdcdc;
          border-style: outset;
          border-radius: 5px;
          height: 42px;
        }
       }
     }
   }
   .dialog-footer{
     .left{
       input{
         width: 100%;
       }
     }
     .right{
       width: 86px;
       text-align: center;
       height: 30px;
       line-height: 30px;
       border:1px solid $color06;
       color: $color06;
       font-size: 15px;
       border-radius: 15px;
       cursor: pointer;
       &:hover{
         color:#fff;
         background-color: $color06;
       }
     }
   }
 }


</style>
