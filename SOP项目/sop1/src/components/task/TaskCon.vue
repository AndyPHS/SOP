<template>
  <div class="all">
    <head-common :renwu = "renwuFlag"></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="flex con_minall">
          <div class="con_min_left">
            <ul>
              <li :class="active==1?'bg-white': 'default_bg' " @click="checkTab(1)" class="flex justify-center items-center">
                <img src="@/assets/image/msgcheck_icon.png" alt="">
                <h2>任务信息</h2>
              </li>
              <li :class="active==2?'bg-white': 'default_bg' " @click="checkTab(2)" class="flex justify-center items-center">
                <img src="@/assets/image/logcheck_icon.png" alt="">
                <h2>任务日志</h2>
              </li>
              <li :class="active==3?'bg-white': 'default_bg' " @click="checkTab(3)" class="flex justify-center items-center ">
                <img src="@/assets/image/filecheck_icon.png" alt="">
                <h2>任务文件</h2>
              </li>
            </ul>
          </div>
          <div class="con_min_right">
            <div v-if="xinxiFlag" class="xinxi">
              <div class="flex justify-between items-center px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer">返回</span>
                </div>
                <div class="flex justify-center items-center">
                  <img v-if="this.taskStopFlag==false" @click="openlogAc(2)" class="mr-3" src="@/assets/image/duoxuankuang.png" alt="">
                  <h2 class="text-2xl text-red-500 font-bold">{{this.taskMsg.basic_data.title}}</h2>
                </div>
                <div>
                  <el-dropdown>
                    <span class="el-dropdown-link text-base">
                      任务管理<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="taolun" width="100px">
                      <div class="a" @click="taolun" style="width: 100px;cursor: pointer;font-size:14px;text-align:center;line-height:30px">讨论管理</div>
                      <!-- <div class="a b" disabled style="width: 100px;font-size:14px;text-align:center;line-height:30px">发起讨论</div> -->
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
              <div class="px-10 pb-10 xinxi_min">
                <div class="hidden flex py-3 justify-start">
                  <span class="w-1/5 text-red-500 text-center text-base">风控预警</span>
                  <div class="w-4/5 text-red-500 text-base">
                    2019-10-30 张力虹 上报风控：当事人原件丢失
                  </div>
                </div>
                <div class="flex py-3 justify-start relative">
                  <span class="w-1/5 text-center text-base">任务介绍</span>
                  <div class="w-3/5 text-sm">
                    {{this.taskMsg.basic_data.title}}
                  </div>
                  <div v-if="this.taskStopFlag==false" class="w-1/5 text-right mr-5 "><span @click="updateAc" class="cursor-pointer hover:font-bold">修改信息</span></div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base">任务信息</span>
                  <div class="w-4/5 pr-32 text-sm">
                    <div class="pb-2">项目及分组：<span>{{this.taskMsg.basic_data.projectTitle}}  {{this.taskMsg.basic_data.groupTitle}} </span></div>
                    <div class="pb-2">任务及时间：<span>{{this.taskMsg.basic_data.title}}  {{this.taskMsg.basic_data.created_time}}</span></div>
                    <div class="flex pb-2">
                      <div class="w-1/2">
                        负责人：<span v-if="this.renwuform.dpt.length>0">{{this.taskMsg.dpt[0].name}}</span>
                        <span v-else>无</span>
                      </div>
                      <div class="w-1/2">
                        审核人：<span v-if="this.taskMsg.basic_data.examineName !=null">{{this.taskMsg.basic_data.examineName}}</span>
                        <span v-else>无</span>
                      </div>
                    </div>
                    <div class="flex pb-2">
                      <div class="w-1/2">
                        任务成员：
                        <ul class="flex flex-wrap mt-3">
                          <li v-for="(item, index) in taskMsg.dptD" :key="index" class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">{{item.name}}</li>
                        </ul>
                      </div>
                      <div class="w-1/2 hidden">
                        协作人：
                        <ul class="flex flex-wrap mt-3">
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                        </ul>
                      </div>
                    </div>
                    <div class="flex pb-2">
                      <div class="w-1/2">
                        任务耗时：<span class="text-red-500 font-bold text-base">27</span>h
                      </div>
                      <div class="w-1/2">
                        优先级：<span class="text-red-500 font-bold text-base">紧急</span>
                      </div>
                    </div>
                    <div class="flex pb-2">
                      <div class="w-1/2">
                        任务日志：<span>{{this.taskMsg.jounalNum}}</span>
                      </div>
                      <div class="w-1/2">
                        任务文件：<span>{{this.taskMsg.fileNum}}</span>
                      </div>
                    </div>
                    <div class="flex pb-2">
                      <div class="w-1/2">
                        任务协作：<span>1</span>
                      </div>
                      <div class="w-1/2">
                        任务讨论：<span>{{this.taskMsg.discussNum}}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base">动态</span>
                  <div v-if="this.taskMsg.dongtai != null" class="w-4/5 pr-32 text-sm">
                    {{this.taskMsg.dongtai}}
                  </div>
                  <div v-else class="w-4/5 pr-32 text-sm">
                    暂无动态
                  </div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base">讨论</span>
                  <div  v-if="this.taskMsg.taolun != null" class="w-4/5 pr-32 text-sm">
                    {{this.taskMsg.taolun}}
                  </div>
                  <div  v-else class="w-4/5 pr-32 text-sm">
                    暂无讨论
                  </div>
                </div>
              </div>
            </div>
            <div v-if="rizhiFlag" class="rizhi">
              <div class="flex justify-between items-center px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer">返回</span>
                </div>
                <div class="flex justify-center items-center">
                  <h2 class="text-2xl text-red-500 font-bold">{{this.taskMsg.basic_data.title}}</h2>
                </div>
                <div class="flex justify-center items-center">
                  <img v-if="taskStopFlag==false" class="mr-3" src="@/assets/image/edit_icon.png" alt="">
                  <span v-if="taskStopFlag==false" @click="openlogAc(3)" class="text-lg">填写日志</span>
                </div>
              </div>
              <div class="px-10 pb-10 rizhi_min">
                <ul>
                  <li v-for="(item, index) in logall" :key="index">
                    <div class="py-2 flex text-sm">
                      <span class="block mr-3 font-bold">{{item.created_time}}</span>
                      <span v-if="logFlag==null"  @click="openLogList(item.id)" class="block text-blue-500">打开编辑历史</span>
                      <span v-if="logFlag == item.id"  @click="openLogList(null)" class="block text-blue-500">收起编辑历史</span>
                    </div>
                    <div v-if="logFlag == item.id">

                    </div>
                    <div class="py-2 flex justify-start items-start">
                      <span class="block mr-2 border border-blue-500 text-blue-500 text-sm px-1 font-bold rounded">{{item.userName}}</span>
                      <span @click="updateJournalAc(item)" class="block text-base cursor-pointer">{{item.content}}</span>
                    </div>
                    <div class="pl-6 py-2 flex flex-wrap">
                      <div v-for="($item, $index) in item.files" :key="$index" class="imagetype">
                        <img class="mx-3" src="@/assets/image/image_icon.png" alt="">
                        <span class="overflow-hidden mr-2" @click="viewFileAc($item)" >{{$item.name}}</span>
                      </div>
                    </div>
                    <div v-if="logFlag == item.id" class="pl-6 py-2">
                      <el-timeline >
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
                  </li>
                </ul>
              </div>
              <div v-if="logall.length==0" class="py-10">
                <img class="mt-10 mx-auto notaskimg" src="@/assets/image/notasklog.png" alt="">
              </div>
              <div class="py-10 w-1/2 mx-auto hidden">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage1"
                  :page-size="100"
                  layout="total, prev, pager, next"
                  :total="1000">
                </el-pagination>
              </div>
            </div>
            <!-- 任务文件 -->
            <div v-if="wenjianFlag" class="wenjian">
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
                    <span class="text-base text-gray-500">上传文件</span>
                  </div>
                  <div class="flex justify-start items-center">
                    <img class="mr-3" src="@/assets/image/addfile_icon.png" alt="">
                    <span class="text-base text-gray-500">新建文件夹</span>
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
            <!-- 没有日志 -->
            <div v-if="notaskFlag" class="mx-auto notask" >
              <div class="flex justify-between items-center px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer">返回</span>
                </div>
                <div class="flex justify-center items-center">
                  <h2 class="text-2xl text-red-500 font-bold">{{this.taskMsg.basic_data.title}}</h2>
                </div>
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/edit_icon.png" alt="">
                  <span @click="openlogAc(3)" class="text-lg">填写日志</span>
                </div>
              </div>
              <img class="mt-10 notaskimg" src="@/assets/image/notasklog.png" alt="">
            </div>
          </div>
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
          <el-input v-model="renwuform.description" class="inputcon" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 所属项目及分组 暂无接口 -->
        <el-form-item label="所属项目及分组" :label-width="formLabelWidth" v-if="this.taskMsg.basic_data.type ==2">
          <el-select
            class="mr-3"
            v-model="renwuform.dptId"
            value-key="id"
            filterable
            remote
            reserve-keyword
            placeholder="请选择项目"
            @visible-change="selectGroup"
            :remote-method="remoteProjectMethod"
            :loading="loading">
            <el-option
              v-for="item in projectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="renwuform.groupId"  placeholder="请选择分组">
            <el-option
              v-for="item in XiangMuOrFenZuAll"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人" :label-width="formLabelWidth">
          <el-select
            v-model="renwuform.dpt"
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
            v-model="renwuform.dptD"
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
        <el-form-item label="审核人" :label-width="formLabelWidth">
          <el-select
            v-model="renwuform.examineId"
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
                  <img class="mr-3 inline-block" @click="removeInspectionTask(item.id, index)" src="@/assets/image/delete_icon.png" alt="">
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
        <img v-if="quedingbox == 2" class="mr-2" src="@/assets/image/duoxuankuangqueding.png" alt="">
        <img v-if="quedingbox == 1 || quedingbox == 3" class="mr-2" src="@/assets/image/duoxuankuang.png" alt="">
        <span class="text-xl text-red-500">{{this.taskMsg.basic_data.title}}</span>
      </div>
      <h2 v-if="this.taskMsg.basic_data.projectTitle !=null" class="text-lg text-center pb-4 pt-2">{{this.taskMsg.basic_data.projectTitle}}</h2>
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
        <div v-if="undateJournalFlag == false" class="registBtn mx-auto" @click="addLogBtn">提交</div>
        <div v-if="undateJournalFlag == true" class="registBtn mx-auto" @click="updateLogBtn">确认修改</div>

        <div class="registCancleBtn"  @click="cancleLogBtn">取消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import head_common from "@/components/partials/head_common.vue"
  import {selectTaskOnly,selectUserByName, taskStop} from '@/api/api/requestLogin.js' // 查询任务详情信息
  import {searchProject, selectProjectGroup, updateTask } from '@/api/api/requestLogin.js' // 搜索项目，分组
  import {addJournal, selectTaskJournal, updateJournal} from '@/api/api/requestLogin.js' // 新增日志

  import {addInspectionTask, deleteInspectionTask, selectInspectionTask, selectSurplusInspectionTask,updateInspectionTaskStatus} from '@/api/api/requestLogin.js' // 添加，删除，查找项目自检项
  export default{
    name:'TaskCon',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        renwuFlag: true,
        visible:false,
        ins:1,
        active: 1,
        LogLabelWidth: '120px',
        formLabelWidth: '150px',
        xinxiFlag: true,  // 任务信息默认显示
        rizhiFlag: false,  // 任务日志默认隐藏
        wenjianFlag: false, // 任务文件默认隐藏
        notaskFlag: false, // 没有任务日志
        dialogConfigRenWu: false, // 任务设置弹框开关
        InspectionTaskAll: [], // 全部任务自检项
        InspectionTaskTitle: '', // 自检项title
        InspectionTaskTitleAll: [], // 新建任务时候自检项暂存数组
        selectRenwuId: null,// 选择当前任务
        dialogLog: false,  // 任务日志弹窗
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
        fileList: [],
        // 日志
        undateJournalFlag: false,   // 修改日志确认按钮隐藏
        quedingbox: null,
        logall: [],
        logFlag: null,
        logzancun: null,
        // 分页
        currentPage1: 5,
        // 任务详情信息
        taskStopFlag: false,  // 任务完结状态
        basic_data: {},
        taskMsg:{
          basic_data:{
            Invalid_time: null,
            autoDelay: 1,
            created_time: "2020-08-25 18:33:10",
            description: "",
            dptId: null,
            end_time: null,
            examineId: 0,
            examineName: null,
            fid: null,
            filesId: null,
            first: null,
            groupId: null,
            groupTitle: "",
            id: null,
            priority: 1,
            projectTitle: null,
            rmtIs: 0,
            start_time: "",
            status: null,
            stop_time: "",
            title: "",
            type: null,
            uid: null,
            update_time: ""
          },
          dpt: [{
            name: '',
            id: null
          }],
          dptD: []
        },
        renwuform: { // 任务详情信息
          title: '', // 标题
          description: '', // 介绍
          type: 1,  // 类型（1为单独任务 2为项目任务）
          dptId: null,  // 项目Id 任务类型为2的时候添加
          groupId: null, // 任务组id 任务类型为2的时候添加
          start_time: '', // 开始时间 格式为yyyy-MM-dd HH:mm:ss
          stop_time: '', // 结束时间 格式为yyyy-MM-dd HH:mm:ss
          first: null,  // 优先级 1紧急 2普通
          examineId: null, // 审核人id
          examineName: '',  // 审核人name
          dpt: [], // 负责人
          dptD: [],   // 成员[1,2,3]
        },
        dptIdflag: false, // 修改时候如果有项目id则为true
        undateDptId: null,  // 暂存项目dptId
        undategroupId: null,  // 暂存分组id
        undateDpt: null,  // 暂存负责人id
        undatefirst: null,  // 优先级暂存
        undateExamineId: null,
        // 模糊搜索添加成员
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [],
        // 模糊搜索项目
        XiangMuOrFenZuAll: [], // 项目总分组
        projectOptions: [],
        projectStates: [],
      }
    },
    mounted(){
      this.getRouterData()
      this.getTaskMsg() // 获取任务信息
      this.remoteMethod('')
      this.getLog() // 查询任务日志
    },
    methods:{
      remoteMethod(query) { // 模糊搜索全部成员
        var that = this
        selectUserByName({name:query}).then((data)=>{
          that.states = data.data.data
          that.options = that.states.map(item => {
            return { value: item.id, label: item.name };
          });
        })
      },
      remoteProjectMethod(query) { // 模糊搜索项目
        var that = this
        searchProject({
          status: 1,    // 1在办 2完结 9删除
          title: query,
          page: 1
        }).then((data)=>{
          var dataAll = data.data.data.data
          that.projectOptions = dataAll.map(item => {
            return { value: item.id, label: item.title };
          });
        })
      },
      selectGroup () { // 选择所属项目
        var that = this
        localStorage.setItem('dptId',this.renwuform.dptId)
        selectProjectGroup().then((data) =>{
          var dataAll = data.data.data
          that.XiangMuOrFenZuAll = dataAll.map(item => {
            return { value: item.id, label: item.title };
          });
        })
      },
      getTaskMsg () { // 任务信息
        var ee= localStorage.getItem('selectRenwuId')
        this.selectRenwuId = ee
        selectTaskOnly(ee).then((data) => {
          this.taskMsg = data.data.data
          this.basic_data = data.data.data.basic_data;
          if(this.basic_data.status ==2){
            this.taskStopFlag = true
          }
          this.renwuform.title = this.basic_data.title;
          this.renwuform.dptId = this.basic_data.dptId;
          if (this.basic_data.dptId != null){
            localStorage.setItem('dptId',this.basic_data.dptId)
            this.renwuform.dptId = this.basic_data.projectTitle
            this.undateDptId =  this.basic_data.dptId
          }
          this.renwuform.groupId = this.basic_data.groupTitle;
          this.undategroupId = this.basic_data.groupId;
          this.renwuform.description = this.basic_data.description;
          this.renwuform.start_time = this.basic_data.start_time
          this.renwuform.stop_time = this.basic_data.stop_time
          this.undatefirst = this.basic_data.first
          if(this.basic_data.first == 1){
            this.renwuform.first = '紧急'
          } else if (this.basic_data.first == 2){
            this.renwuform.first = '普通'
          }
          this.renwuform.examineId = this.basic_data.examineName
          this.undateExamineId = this.basic_data.examineId
          this.InspectionTaskAll = data.data.data.inspection
          this.renwuform.dpt = data.data.data.dpt
          if(this.renwuform.dpt.length >0 ){
            this.renwuform.dpt = data.data.data.dpt[0].name;
            this.undateDpt = data.data.data.dpt[0].id
          }
          if(data.data.data.dptD.length >0 ){
            var eedptD = data.data.data.dptD
            var oldList = eedptD.map(eitem => {
              return eitem.id ;
            });
            this.list = eedptD.map(eitem => {
              return eitem.name ;
            });
            this.renwuform.dptD = oldList
          }
        })
      },
      openlogAc (e) { // 打开日志弹窗
        if(e==3){
          this.logForm.start_time = ''  // 开始时间
          this.logForm.stop_time = '';  // 结束时间
          this.logForm.content = '';  // 日志内容
          this.logForm.imgs = [];   // 上传文件
          this.fileList = []
        }
        this.quedingbox = e
        this.undateJournalFlag = false
        this.dialogLog = true
        this.selectInspectionTaskAction (this.selectRenwuId)
      },
      openLogList (e) { // 展开收起任务日志列表
        this.logFlag = e
      },
      updateJournalAc (item) { // 点击修改日志按钮
        this.quedingbox = 1
        this.dialogLog = true
        localStorage.setItem('OnlyLogId', item.id)
        this.undateJournalFlag = true
        this.logForm.content = item.content
        this.logForm.start_time = item.start_time
        this.logForm.stop_time = item.stop_time
        var file = item.files
        this.fileList = file.map(item => {
          return { name: item.name, url: item.url };
        });
        this.logForm.imgs = this.fileList
      },
      updateLogBtn () { // 确认修改日志
        updateJournal({
          content: this.logForm.content,
          status: 1,
          start_time: this.logForm.start_time,
          stop_time: this.logForm.stop_time,
          imgs: JSON.stringify(this.logForm.imgs)
        }).then((data)=>{
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          localStorage.removeItem('OnlyLogId')
          this.dialogLog = false
          this.undateJournalFlag = false
          this.getLog()
          this.logForm.start_time = ''  // 开始时间
          this.logForm.stop_time = '';  // 结束时间
          this.logForm.content = '';  // 日志内容
          this.logForm.imgs = [];   // 上传文件
          this.fileList = []
        })
      },
      viewFileAc ($item) { // 预览文件
        window.location.href = $item.url
      },
      addInspectionTaskAc () { // 添加任务自检项
        addInspectionTask({
          title: this.InspectionTaskTitle
        }).then((data) => {
          this.selectInspectionTaskAction (this.selectRenwuId)
          this.InspectionTaskTitle = ''
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
      getLog () { // 查询任务日志
        var dpId = localStorage.getItem('selectRenwuId')
        selectTaskJournal({
          type: 2,
          dpId: dpId,
          status: 1,
          order: 1
        }).then((data) => {
          this.logall = data.data.data
          if(this.logall.length ==0){
            this.notaskFlag = true
          }
        }).catch((data) => {
          // this.$router.replace('/')
        })
      },
      selectInspectionTaskAction (e) { // 查询自检项
        selectInspectionTask(e).then((data) => {
          if(data.data.status_code ==200 ){
            this.InspectionTaskAll = data.data.data
          }
        })
      },
      getRouterData () { // 初始化数据
        const nav = this.$route.query.nav
        if(nav ==1){
          this.active =1
          this.xinxiFlag = true
          this.rizhiFlag = false
          this.wenjianFlag = false
          this.notaskFlag = false
        } else if(nav ==2){
          this.active =2
          this.xinxiFlag = false
          this.rizhiFlag = true
          this.wenjianFlag = false
          this.notaskFlag = false
        }
      },
      // 左侧导航切换
      checkTab (e) {
        if(e==1){
          this.active =1
          this.xinxiFlag = true
          this.rizhiFlag = false
          this.wenjianFlag = false
          this.notaskFlag = false
        } else if (e==2){
          this.active =2
          this.xinxiFlag = false
          this.rizhiFlag = true
          this.wenjianFlag = false
          this.notaskFlag = false
        } else if (e==3){
          var selectRenwuId = localStorage.getItem('selectRenwuId')
          this.$router.replace('/TaskFileall/'+selectRenwuId + '/2')
        }
      },
      textbtn () { // 重命名
        alert(1)
      },
      goBack () { // 返回任务管理页面
        this.$router.replace("/TaskManagement")
      },
      updateAc () { // 点击修改信息按钮
        this.dialogConfigRenWu = true
        // this.getRouterData()
      },
      updateTaskBtn(){  // 修改任务
        var needpt = this.renwuform.dpt
        if(typeof needpt == "string"){
          needpt = this.undateDpt
        }
        needpt ="[" + needpt + "]"
        var neeexamined = this.renwuform.examineId
        if(typeof neeexamined == "string"){
          neeexamined = this.undateExamineId
        } else {
          neeexamined = this.renwuform.examineId
        }
        var neegroupId = this.renwuform.groupId
        if(typeof neegroupId == "string"){
          neegroupId = this.undategroupId
        } else {
          neegroupId = this.renwuform.groupId
        }
         var neefirst = this.renwuform.first
         if(typeof neefirst == "string"){
           neefirst = this.undatefirst
         } else {
           neefirst = this.renwuform.first
         }

        if(this.renwuform.type == 1){ //单独任务
          updateTask({
            title: this.renwuform.title,
            description: this.renwuform.description,
            type:  1,
            start_time: this.renwuform.start_time,
            stop_time: this.renwuform.stop_time,
            dpt: needpt,
            dptD: JSON.stringify(this.renwuform.dptD),
            examineId: neeexamined,
            first: neefirst
          }).then((data)=>{
            this.dialogConfigRenWu = false;
          })
        } else if(this.renwuform.type == 2){
          updateTask({
            title: this.renwuform.title,
            description: this.renwuform.description,
            type:  2,
            dptId: this.renwuform.dptId,
            groupId: neegroupId,
            start_time: this.renwuform.start_time,
            stop_time: this.renwuform.stop_time,
            dpt: needpt,
            dptD: JSON.stringify(this.renwuform.dptD),
            examineId: neeexamined,
            first: neefirst
          }).then((data)=>{
            this.getTaskMsg()
            this.dialogConfigRenWu = false;
          })
        }
      },
      cancleTaskBtn () { // 取消设置
        this.dialogConfigRenWu = false;
        this.renwuform.title = ''
        this.renwuform.description = ''
        this.renwuform.type = null
        this.renwuform.dptId = null
        this.renwuform.groupId = null
        this.renwuform.start_time = ''
        this.renwuform.stop_time = ''
        this.renwuform.first = null
        this.renwuform.examineId = null
        this.renwuform.dpt = null
        this.renwuform.dptD = []
      },
      goCon () {
        this.$router.replace('/TaskFile')
      },
      taolun () {
        this.$router.replace('/taskTalk')
      },
      handleRemove(file, fileList) { // 删除日志预览图片
        console.log(file, fileList);
      },
      handlePreview(file) { // 添加日志文件
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
        var ee = localStorage.getItem('selectRenwuId')
        selectSurplusInspectionTask(ee).then((data)=>{
          console.log(data.data.data)
          if(data.data.data.length ==0){
            taskStop().then((data)=>{
              this.getTaskMsg()
            })
          }
        })
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
          this.getLog() // 重新获取日志列表
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
        this.logForm.imgs = [];   // 上传文件
        this.logForm.zijianxiang = []; // 自检项
        this.fileList = []
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      openrizhiForm () { // 打开日志弹窗
        this.dialogLog = true
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
              ul{
                li{
                  .imagetype{
                    width: 220px;
                    border:1px solid #dcdcdc;
                    background-color: #f8f8f8;
                    border-radius: 5px;
                    height: 57px;
                    display: flex;
                    align-items: center;
                    margin-right: 10px;
                    margin-bottom: 10px;
                  }
                }
              }
            }
          }
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
 .inputcon{width: 86.5% !important;}
 .default_bg{background-color: #e7e7e7;;}
</style>
