<template>
  <div class="all">
    <head-common></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="con_top">
          <div class="con_t_l">
            <ul>
              <li class="select">
                <span :class="{active:ins==1}" @click="changeSelect">{{ myjobtitle }}</span>
                <img class="ml-2" v-if="!select" src="@/assets/image/down_icon_dark.png" alt="">
                <img class="ml-2" v-if="select" src="@/assets/image/down_icon_red.png" alt="">
                <div class="selectbox" v-if="select">
                  <ul>
                    <li v-for="(item, index) in Myjob" :key="index" @click="chooseAboutme(item)">{{ item.name }}</li>
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
            <div class="timeBox">
              <el-date-picker
                v-model="selectTime"
                type="date"
                size="small"
                value-format="yyyy-MM-dd hh:mm:ss"
                placeholder="选择日期"
                @change="searchTimeList"
                >
              </el-date-picker>
            </div>
            <div class="searchBox">
              <input class="" v-model="searchMsg" type="text">
              <img @click="searchList" src="@/assets/image/search_icon.png" alt="">
            </div>
          </div>
        </div>
        <div class="con_add">
          <div class="con_add_box">
            <input class="renwu" v-model="newRenWu" placeholder="点击新建任务" type="text">
            <span class="addRenWuBtn" @click="fastAddAction">确定</span>
          </div>
        </div>
        <div class="con_list" v-if="this.selectAllTaskFlag==true">
          <h2 v-if="this.allocated_top.length>0">待分配任务<span style="right: -15px;">{{ allocated_top.length }}</span></h2>
          <div v-if="this.allocated_top.length>0" class="con_list_min">
            <ul>
              <li v-for="(item, index) in allocated_top" :key="index">
                <div class="duocuankuangBox">

                </div>
                <div class="con_list_i" >
                  <div v-if="item.M !=null">
                    <div v-if="item.Mtype==2" class="toother">
                      <span v-html="item.M.name"></span>
                    </div>
                    <div v-if="item.Mtype==1" class="tome">
                      <span v-html="item.M.name"></span>
                    </div>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                    <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                    <!-- rmtIs  1风控  0 无风险 -->
                      <img v-if="item.status==4" src="@/assets/image/guo_icon.png" alt="">
                      <img  v-if="item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                      <img v-if="item.type==3" src="@/assets/image/xie_icon.png" alt="">
                      <img v-if="item.status==3" src="@/assets/image/yan_icon.png" alt="">
                  </h3>
                  <p>{{ item.description }}</p>
                </div>
                <div class="con_list_r">
                  <ul>
                    <!-- 修改任务 -->
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                      <img @click="configBtn(item)" src="@/assets/image/ren_04.png" alt="">
                    </li>
                    <!-- 删除任务 -->
                    <li>
                      <img @click="removeAction(item, index)" src="@/assets/image/ren_05.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <h2 v-if="this.toDay.length>0">今日任务 <span>{{ toDay.length }}</span></h2>
          <div v-if="this.toDay.length>0" class="con_list_min">
            <ul>
              <li v-for="(item, index) in toDay" :key="index">
                <div class="duocuankuangBox">
                  <div class="duocuankuang">
                    <img v-if="myjobId == 2 " @click="addLogOne(item)" src="@/assets/image/duoxuankuang.png" alt="">
                  </div>
                </div>
                <div class="con_list_i" >
                  <div v-if="item.M !=null">
                    <div v-if="item.Mtype==2" class="toother">
                      <span v-html="item.M.name"></span>
                    </div>
                    <div v-if="item.Mtype==1" class="tome">
                      <span v-html="item.M.name"></span>
                    </div>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                    <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                    <!-- rmtIs  1风控  0 无风险 -->
                      <img v-if="item.status==4" src="@/assets/image/guo_icon.png" alt="">
                      <img  v-if="item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                      <img v-if="item.type==3" src="@/assets/image/xie_icon.png" alt="">
                      <img v-if="item.status==3" src="@/assets/image/yan_icon.png" alt="">
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
                        <img src="@/assets/image/ren_01.png" alt="">
                      </el-tooltip>
                    </li>
                    <!-- 任务日志 -->
                    <li>
                      <img src="@/assets/image/ren_02.png" alt="">
                    </li>
                    <!-- 发起讨论/发起协作 -->
                    <li>
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
                    <!-- 修改任务 -->
                    <li>
                      <img @click="configBtn(item)" src="@/assets/image/ren_04.png" alt="">
                    </li>
                    <!-- 删除任务 -->
                    <li>
                      <img @click="removeAction(item, index)" src="@/assets/image/ren_05.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <h2 v-if="this.nearDay.length>0">近期任务 <span>{{ nearDay.length }}</span></h2>
          <div v-if="this.nearDay.length>0" class="con_list_min">
            <ul>
              <li v-for="(item, index) in nearDay" :key="index">
                <div class="duocuankuangBox">
                  <div class="duocuankuang">
                    <img  v-if="myjobId == 2 " @click="addLogOne(item)" src="@/assets/image/duoxuankuang.png" alt="">
                  </div>
                </div>
                <div class="con_list_i" >
                  <div v-if="item.M !=null">
                    <div v-if="item.Mtype==2" class="toother">
                      <span v-html="item.M.name"></span>
                    </div>
                    <div v-if="item.Mtype==1" class="tome">
                      <span v-html="item.M.name"></span>
                    </div>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                    <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                    <!-- rmtIs  1风控  0 无风险 -->
                      <img v-if="item.status==4" src="@/assets/image/guo_icon.png" alt="">
                      <img  v-if="item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                      <img v-if="item.type==3" src="@/assets/image/xie_icon.png" alt="">
                      <img v-if="item.status==3" src="@/assets/image/yan_icon.png" alt="">
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
                        <img src="@/assets/image/ren_01.png" alt="">
                      </el-tooltip>

                    </li>
                    <li>
                      <img src="@/assets/image/ren_02.png" alt="">
                    </li>
                    <li>
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
                    <li>
                      <img src="@/assets/image/ren_04.png" alt="">
                    </li>
                    <li>
                      <img @click="removeAction(item, index)" src="@/assets/image/ren_05.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <h2 v-if="this.futureDay.length>0">未来任务 <span>{{ futureDay.length }}</span></h2>
          <div v-if="this.futureDay.length>0" class="con_list_min">
            <ul>
              <li v-for="(item, index) in futureDay" :key="index">
                <div class="duocuankuangBox">
                  <div class="duocuankuang">
                    <img v-if="myjobId == 2 " @click="addLogOne(item)" src="@/assets/image/duoxuankuang.png" alt="">
                  </div>
                </div>
                <div class="con_list_i" >
                  <div v-if="item.M !=null">
                    <div v-if="item.Mtype==2" class="toother">
                      <span v-html="item.M.name"></span>
                    </div>
                    <div v-if="item.Mtype==1" class="tome">
                      <span v-html="item.M.name"></span>
                    </div>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                    <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                    <!-- rmtIs  1风控  0 无风险 -->
                      <img v-if="item.status==4" src="@/assets/image/guo_icon.png" alt="">
                      <img  v-if="item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                      <img v-if="item.type==3" src="@/assets/image/xie_icon.png" alt="">
                      <img v-if="item.status==3" src="@/assets/image/yan_icon.png" alt="">
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
                        <img src="@/assets/image/ren_01.png" alt="">
                      </el-tooltip>
                    </li>
                    <li>
                      <img src="@/assets/image/ren_02.png" alt="">
                    </li>
                    <!-- 发起讨论/发起协作 -->
                    <li>
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
                    <li>
                      <img src="@/assets/image/ren_04.png" alt="">
                    </li>
                    <li>
                      <img @click="removeAction(item, index)" src="@/assets/image/ren_05.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <h2 v-if="this.endDay.length>0">完成任务 <span>{{ endDay.length }}</span></h2>
          <div v-if="this.endDay.length>0" class="con_list_min">
            <ul>
              <li v-for="(item, index) in endDay" :key="index">
                <div class="duocuankuangBox">
                  <div class="duocuankuang">
                    <img src="@/assets/image/duoxuankuangqueding.png" alt="">
                  </div>
                </div>
                <div class="con_list_i" >
                  <div v-if="item.M !=null">
                    <div v-if="item.Mtype==2" class="toother">
                      <span v-html="item.M.name"></span>
                    </div>
                    <div v-if="item.Mtype==1" class="tome">
                      <span v-html="item.M.name"></span>
                    </div>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                    <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                    <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                    <!-- rmtIs  1风控  0 无风险 -->
                      <img v-if="item.status==4" src="@/assets/image/guo_icon.png" alt="">
                      <img  v-if="item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                      <img v-if="item.type==3" src="@/assets/image/xie_icon.png" alt="">
                      <img v-if="item.status==3" src="@/assets/image/yan_icon.png" alt="">
                  </h3>
                  <p>{{ item.description }}</p>
                </div>
                <div class="con_list_r">
                  <ul>
                    <li>
                      <img src="@/assets/image/recover_icon.png" alt="">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div class="con_list" v-if="this.selectOnlyTaskFlag==true">
          <div class="con_list_min">
            <ul>
              <li v-for="(item, index) in selectOnlyTask" :key="index">
                <div class="duocuankuangBox">
                   <img v-if="myjobId == 2 && changeSelectRenWuID == 2 || changeSelectRenWuID == 3 || changeSelectRenWuID == 4 " @click="addLogOne(item)" src="@/assets/image/duoxuankuang.png" alt="">
                   <img v-if="changeSelectRenWuID == 5" src="@/assets/image/duoxuankuangqueding.png" alt="">
                </div>
                <div class="con_list_i" >
                  <div v-if="item.M !=null">
                    <div v-if="item.Mtype==2" class="toother">
                      <span v-html="item.M.name"></span>
                    </div>
                    <div v-if="item.Mtype==1" class="tome">
                      <span v-html="item.M.name"></span>
                    </div>
                  </div>
                </div>
                <div class="con_list_m">
                  <h3>
                    {{ item.title }}
                  <!-- status 0信息未填完任务 1开始任务 2完成任务 3延期任务 4过期任务 9删除任务 -->
                  <!-- "type"://1独立任务 2项目任务 3协作任务 -->
                  <!-- rmtIs  1风控  0 无风险 -->
                    <img v-if="item.status==4" src="@/assets/image/guo_icon.png" alt="">
                    <img  v-if="item.rmtIs==1" src="@/assets/image/feng_icon.png" alt="">
                    <img v-if="item.type==3" src="@/assets/image/xie_icon.png" alt="">
                    <img v-if="item.status==3" src="@/assets/image/yan_icon.png" alt="">
                  </h3>
                  <p>{{ item.description }}</p>
                </div>
                <div class="con_list_r">
                  <ul>
                    <li v-if="changeSelectRenWuID == 2 || changeSelectRenWuID == 3 || changeSelectRenWuID == 4 ">
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
                        <img src="@/assets/image/ren_01.png" alt="">
                      </el-tooltip>
                    </li>
                    <!-- 任务日志 -->
                    <li v-if="changeSelectRenWuID == 2 || changeSelectRenWuID == 3 || changeSelectRenWuID == 4 || changeSelectRenWuID == 6">
                      <img @click="addLog(item)" src="@/assets/image/ren_02.png" alt="">
                    </li>
                    <!-- 发起讨论/发起协作 -->
                    <li v-if="changeSelectRenWuID == 2 || changeSelectRenWuID == 3 || changeSelectRenWuID == 4">
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
                    <li v-if="changeSelectRenWuID == 2 || changeSelectRenWuID == 3 || changeSelectRenWuID == 4 || changeSelectRenWuID == 6">
                      <img @click="configBtn(item)" src="@/assets/image/ren_04.png" alt="">
                    </li>
                    <!-- 删除任务 -->
                    <li v-if="changeSelectRenWuID != 7 && changeSelectRenWuID != 5">
                      <img @click="removeAction(item, index)" src="@/assets/image/ren_05.png" alt="">
                    </li>
                    <!-- 恢复任务 -->
                    <li v-if="changeSelectRenWuID == 7 || changeSelectRenWuID == 5">
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
        <div class="mx-auto notask" v-if="this.changeSelectNum == 0">
          <img class="mt-10" src="@/assets/image/notask.png" alt="">
        </div>
      </div>
    </div>
    <!-- 任务设置弹窗 -->
    <el-dialog title="任务设置" :visible.sync="dialogConfigRenWu" center width="720px">
      <el-form :model="renwuform" id="configrenwu">
        <el-form-item label="任务名称" :label-width="formLabelWidth">
          <el-input v-model="renwuform.title" class="inputcon" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="任务介绍" :label-width="formLabelWidth">
          <el-input v-model="renwuform.description" class="inputcon" ></el-input>
        </el-form-item>
        <!-- 所属项目及分组 暂无接口 -->
        <el-form-item label="所属项目及分组" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="BuMenSelect" @change="BuMenChange" placeholder="请选择项目">
            <el-option
              v-for="(item, index) in BuMen"
              :key="index"
              :label="index"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="XiangMuOrFenZuSelecter"  placeholder="请选择分组">
            <el-option
              v-for="(item, index) in XiangMuOrFenZuAll"
              :key="index"
              :label="item.title"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人" :label-width="formLabelWidth">
          <el-select class="mr-10" v-model="dptBuMenSelect" @change="chooseDpt" placeholder="请选择">
            <el-option
              v-for="(item, index) in BuMen"
              :key="index"
              :label="index"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="renwuform.dpt" @change="changeDpt(renwuform.dpt)" value-key="value" placeholder="请选择">
            <el-option
              v-for="item in PersonAll"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务成员" :label-width="formLabelWidth" class="relative">
          <el-select class="mr-10" v-model="dptDBuMenSelect" @change="choosedptD" placeholder="请选择成员">
            <el-option
              v-for="(item, index) in BuMen"
              :key="index"
              :label="index"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="renwuform.dptD" value-key="label" placeholder="请选择角色" multiple="multiple">
            <el-option
              v-for="item in PersonAll"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
          <div class="addIconBox">
            <img src="@/assets/image/delete_icon.png" alt="">
            <img src="@/assets/image/add_icon.png" alt="">
          </div>
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
          <el-select v-model="renwuform.examineId" value-key="label" @change="chooseLeader" placeholder="请选择">
            <el-option
              v-for="item in PersonAll"
              :key="item.id"
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
        <el-form-item label="优先级" :label-width="formLabelWidth">
          <el-select v-model="renwuform.first" placeholder="请选择">
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
                  <img class="mr-3 inline-block" @click="removeInspectionTask(item.id)" src="@/assets/image/delete_icon.png" alt="">
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

      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-around" >
        <div class="registBtn mx-auto" @click="updateTaskBtn">保存</div>
        <div class="registCancleBtn"  @click="cancleTaskBtn">取消</div>
      </div>
    </el-dialog>
    <!-- 任务日志弹窗 -->
    <el-dialog title="" :visible.sync="dialogLog" center width="720px">
      <div class="flex justify-center items-center py-2">
        <img v-if="checkedLog" class="mr-2" src="@/assets/image/duoxuankuangqueding.png" alt="">
        <span class="text-xl text-red-500">确定管辖法院</span>
      </div>
      <h2 class="text-lg text-center pb-4 pt-2">张三诉讼李四  离婚纠纷案</h2>
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
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
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
                <el-checkbox v-for="(item, index) in InspectionTaskAll" :label="item.title" :key="index">{{item.title}}</el-checkbox>
              </el-checkbox-group>
            <!-- <ul>
              <li v-for="(item, index) in InspectionTaskAll" :key="index" class="flex justify-around py-2">
                <p class="w-5/6">{{ item.title }}</p>

              </li>
            </ul> -->
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
  import {addTask, updateTask, recoveryDeleteTask} from '@/api/api/requestLogin.js' // 新增任务
  import {deleteTask} from '@/api/api/requestLogin.js' // 删除任务
  import {selectTask} from '@/api/api/requestLogin.js' // 通过任务类型查询任务列表
  import {selectTaskWhere} from '@/api/api/requestLogin.js' // 通过关键词查找任务列表
  import {selectTaskWhereTime} from '@/api/api/requestLogin.js'  // 通过时间查找任务列表
  import {selectTaskOnly} from '@/api/api/requestLogin.js' // 查询任务详情信息
  import {createdDet} from '@/api/api/requestLogin.js' // 查找部门
  import {selectDet} from '@/api/api/requestLogin.js' // 查找部门成员
  import {addInspectionTask, deleteInspectionTask, selectInspectionTask, selectSurplusInspectionTask} from '@/api/api/requestLogin.js' // 添加，删除，查找项目自检项
  export default{
    name:'TaskManagement',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        visible:false,
        name: localStorage.getItem('name'),
        userId: localStorage.getItem('userId'),
        shortName:'', // 名字两个字
        Myjob: [
          {name:'全部',ID:1},{name:'我负责的',ID:2},{name:'我安排的',ID:3}
        ],
        RenWu:[
          {name: '全部任务',ID:1},{name: '今日任务',ID:2},{name: '近期任务',ID:3},{name: '未来任务',ID:4},{name: '完成任务',ID:5},{name: '待分配任务',ID:6},{name: '已删除任务',ID:7}
        ],
        ins:1,
        select:false,
        selectRenWu:false,
        selectAllTaskFlag: true,  // 默认查询全部任务
        myjobtitle: '全部', // 修改我负责和我发布任务的标题
        myjobId: 1, // 我发布的ID
        changeSelectRenWuTitle: '全部任务', // 修改选择任务的标题
        changeSelectNum: 0, // 当前任务数量
        changeSelectRenWuID: 1, // 修改选择任务的ID
        selectOnlyTask: [], // 单独任务的数组
        selectOnlyTaskFlag: false, // 单独任务列表的开关
        selectTime: '',
        searchMsg: '',
        newRenWu: '',
        allocated_top: [], // 今日待分配任务（头部）
        toDay:[], // 今日任务
        nearDay: [], // 近期任务
        futureDay: [], // 未来任务
        endDay: [], // 完结任务
        allocated_button: [],  // 待分配任务（底部）
        basic_data: {}, // 任务详情信息
        dpt: [], // 任务负责人
        dptD: [], // 任务团队成员
        inspection: [], // 任务任务自检项
        notask: false, // 没有任务的时候替代图片
        form: {
          type: ''
        },
        formLabelWidth: '150px',
        LogLabelWidth: '120px',
        dialogConfigRenWu: false, // 任务设置弹框开关
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
          first: null,  // 优先级 1紧急 2普通
          examineId: null, // 审核人
          dpt: {}, // 负责人
          dptD: [],   // 成员[1,2,3]
        },
        InspectionTaskAll: [], // 全部任务自检项
        InspectionTaskTitle: '', // 自检项title
        selectRenwuId: null,// 选择当前任务
        dialogLog: false,  // 任务日志弹窗
        checkedLog: false, // 是否完成
        logForm: {
          start_time: '',  // 开始时间
          stop_time: '',  // 结束时间
          content: '',  // 日志内容
          file: null,   // 上传文件
          zijianxiang: [], // 自检项
          // checkedzijian: []
        },
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    mounted(){
      this.pagestart()//页面初始化
      this.GetBuMen() // 查找部门
    },
    methods:{
      updateTaskBtn(){  // 修改任务
        if (this.renwuform.dptId == null || this.renwuform.groupId == null){
          this.renwuform.type = 1
        } else {
           this.renwuform.type = 2
        }
        updateTask({
          title: this.renwuform.title,
          description: this.renwuform.description,
          type:  this.renwuform.type,
          start_time: this.renwuform.start_time,
          stop_time: this.renwuform.stop_time,
          dpt: this.renwuform.dpt.id,
          dptD: JSON.stringify(this.renwuform.dptD),
          examineId: this.renwuform.examineId,
          first: this.renwuform.first
        }).then((data)=>{
          this.renwuform = {};
          this.dptBuMenSelect = '';
          this.dialogConfigRenWu = false;
        })
      },
      cancleTaskBtn () { // 取消设置
        this.dialogConfigRenWu = false;
        this.renwuform = {};
        this.dptBuMenSelect = '';
      },
      pagestart(){ // 初始化数据

        selectTask({
          why: 1,
          type: 1
        }).then((data)=>{  // 查询任务列表
          this.allocated_top = data.data.data.allocated_top;
          this.toDay = data.data.data.toDay;
          this.nearDay = data.data.data.nearDay;
          this.futureDay = data.data.data.futureDay;
          this.endDay = data.data.data.endDay;
          this.changeSelectNum = this.allocated_top.length + this.toDay.length + this.nearDay.length + this.futureDay.length + this.endDay.length
        })
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
      chooseAboutme(item){  // 选择第一个下拉框
        this.select = false
        this.myjobtitle = item.name;
        this.myjobId = item.ID;
        selectTask({
          why: this.myjobId,
          type: this.changeSelectRenWuID
        }).then((data)=>{  // 查询任务列表
          if(this.changeSelectRenWuID == 1){
            this.selectOnlyTaskFlag = false
            this.selectAllTask = true
            this.allocated_top = data.data.data.allocated_top;
            this.toDay = data.data.data.toDay;
            this.nearDay = data.data.data.nearDay;
            this.futureDay = data.data.data.futureDay;
            this.endDay = data.data.data.endDay;
            this.changeSelectNum = this.allocated_top.length + this.toDay.length + this.nearDay.length + this.futureDay.length + this.endDay.length
          } else {
            this.allocated_top = [];
            this.toDay = [];
            this.nearDay = [];
            this.futureDay = [];
            this.endDay = [];
            this.selectAllTask = false
            this.selectOnlyTaskFlag = true
            this.selectOnlyTask = data.data.data
            this.changeSelectNum  = this.selectOnlyTask.length
          }
          if(this.changeSelectNum.length==0){
            this.notask = true;
          }else{
            this.notask = false;
          }
        })
      },
      chooseRenWu(item){  // 选择任务按钮触发
        this.selectOnlyTaskFlag = true
        this.selectAllTask = false
        this.changeSelectRenWuID = item.ID
        this.changeSelectRenWuTitle = item.name;
        selectTask({
          why: this.myjobId,
          type: this.changeSelectRenWuID
        }).then((data)=>{  // 查询任务列表
          if(this.changeSelectRenWuID == 1){
            this.selectOnlyTaskFlag = false
            this.selectAllTask = true
            this.allocated_top = data.data.data.allocated_top;
            this.toDay = data.data.data.toDay;
            this.nearDay = data.data.data.nearDay;
            this.futureDay = data.data.data.futureDay;
            this.endDay = data.data.data.endDay;
            this.changeSelectNum = this.allocated_top.length + this.toDay.length + this.nearDay.length + this.futureDay.length + this.endDay.length
          } else {
            this.allocated_top = [];
            this.toDay = [];
            this.nearDay = [];
            this.futureDay = [];
            this.endDay = [];
            this.selectAllTask = false
            this.selectOnlyTaskFlag = true
            this.selectOnlyTask = data.data.data
            this.changeSelectNum  = this.selectOnlyTask.length
          }
          if(this.changeSelectNum ==0){
            this.notask = true;
          }else{
            this.notask = false;
          }
        })
        this.selectRenWu = false
      },
      searchList(){ // 通过关键字查找任务
        this.allocated_top = [];
        this.toDay = [];
        this.nearDay = [];
        this.futureDay = [];
        this.endDay = [];
        this.allocated_button = [];
        selectTaskWhere({
          where: this.searchMsg
        }).then((data)=>{  // 查询任务列表
          this.searchMsg = '';
          this.allocated_top = data.data.data.allocated_top;
          this.toDay = data.data.data.toDay;
          this.nearDay = data.data.data.nearDay;
          this.futureDay = data.data.data.futureDay;
          this.endDay = data.data.data.endDay;
          this.allocated_button = data.data.data.allocated_button;
          this.changeSelectNum = this.allocated_top.length + this.toDay.length + this.nearDay.length + this.futureDay.length + this.endDay.length
          if(this.changeSelectNum == 0){
            this.notask = true;
          }else{
            this.notask = false;
          }
        })
        // this.selectTime = '';
      },
      searchTimeList(){ // 通过时间查找任务
        this.allocated_top = [];
        this.toDay = [];
        this.nearDay = [];
        this.futureDay = [];
        this.endDay = [];
        this.allocated_button = [];
        selectTaskWhereTime({
          whereTime: this.selectTime
        }).then((data)=>{  // 查询任务列表
          this.selectTime = '';
          this.allocated_top = data.data.data.allocated_top;
          this.toDay = data.data.data.toDay;
          this.nearDay = data.data.data.nearDay;
          this.futureDay = data.data.data.futureDay;
          this.endDay = data.data.data.endDay;
          // this.allocated_button = data.data.data.allocated_button;
          this.changeSelectNum = this.allocated_top.length + this.toDay.length + this.nearDay.length + this.futureDay.length + this.endDay.length
          if(this.changeSelectNum == 0){
            this.notask = true;
          }else{
            this.notask = false;
          }
        })
      },
      fastAddAction(){ // 点击新建，快速创建任务
        if(this.newRenWu != ''){
          this.renwuform = {};
          addTask({
            title: this.newRenWu,
            type: 1
          }).then((data)=>{
             this.newRenWu = '';
             this.pagestart()
          })
        } else {
          this.$message({
            showClose: true,
            message: '任务标题不能为空',
            type: 'error'
          });
        }
      },
      queding(){ // 选择前面确定多选框
        if(this.form.type){
          this.basic_data.status = 2;
          console.log(this.basic_data.status)
        }else{
          this.basic_data.status = 0;
        }
      },
      removeAction(item, index){ // 删除任务
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
            }else if(this.changeSelectRenWuTitle=='今日待分配'){
              this.allocated_top.splice(index,1)
            }else if(this.changeSelectRenWuTitle=='待分配任务'){
              this.allocated_top.splice(index,1)
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
      InitiateDiscussion(){ // 发起讨论
        alert("发起讨论")
      },
      InitiateCollaboration(){ // 发起协作
        alert('发起协作')
      },
      changeDpt(val){
        console.log(val)
      },
      configBtn (item) {  // 点击修改任务按钮
        localStorage.setItem('selectRenwuId',item.id)
        this.selectRenwuId = item.id
        this.dialogConfigRenWu = true;
        this.renwuform.title = item.title;
        this.renwuform.description = JSON.stringify(item.description);
        selectTaskOnly(item.id).then((data)=>{
          this.dpt = data.data.data.dpt;
          this.dptD = data.data.data.dptD;
          // this.basic_data = data.data.data.basic_data;
          this.renwuform.dpt = data.data.data.dpt;
          this.renwuform.dptD = data.data.data.dptD;
          this.inspection = data.data.data.inspection;
          this.renwuform.start_time = data.data.data.basic_data.start_time;
          this.renwuform.stop_time = data.data.data.basic_data.stop_time;
          this.renwuform.first = 1
          this.changeDpt(this.renwuform.dpt)
        })
        this.selectInspectionTaskAction(item.id)
      },
      selectInspectionTaskAction (e) { // 查询自检项
        selectInspectionTask(e).then((data) => {
          if(data.data.status_code ==200 ){
            this.InspectionTaskAll = data.data.data
          }
        })
      },
      removeInspectionTask (id) { // 删除任务自检项
        deleteInspectionTask(id).then((data) => {
          this.selectInspectionTaskAction (this.selectRenwuId)
        })
      },
      addInspectionTaskAc () { // 添加任务自检项
        addInspectionTask({
          title: this.InspectionTaskTitle
        }).then((data) => {
          this.selectInspectionTaskAction (this.selectRenwuId)
          this.InspectionTaskTitle = ''
        })
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
      chooseexamineId(){ // 选择审核人部门
        this.PersonAll = {}
        selectDet(this.examineIdBuMenSelect).then((data)=>{
          this.PersonAll = data.data.data
        })
      },
      chooseLeader(){ // 选择审核人
        console.log(this.renwuform.examineId)
      },
      BuMenChange(){ // 选择部门
        console.log(this.BuMenSelect)
      },
      XiangMuOrFenZuChange(){
        console.log(1)
      },
      addLogOne (item) {
        this.checkedLog = true
        this.dialogLog = true
        this.selectInspectionTaskAction(item.id)
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
        console.log(file);
      },
      addLogBtn () { // 提交日志
        alert("提交成功")
        this.dialogLog = false
        this.logForm.start_time = ''  // 开始时间
        this.logForm.stop_time = '';  // 结束时间
        this.logForm.content = '';  // 日志内容
        this.logForm.file = null;   // 上传文件
        this.logForm.zijianxiang = []; // 自检项
      },
      cancleLogBtn () { // 取消提交日志
        this.dialogLog = false
        this.logForm.start_time = ''  // 开始时间
        this.logForm.stop_time = '';  // 结束时间
        this.logForm.content = '';  // 日志内容
        this.logForm.file = null;   // 上传文件
        this.logForm.zijianxiang = []; // 自检项
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
              color: #4c4a4a;
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
                width: 40px;
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
