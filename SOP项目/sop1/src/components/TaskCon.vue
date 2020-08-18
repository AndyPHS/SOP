<template>
  <div class="all">
    <head-common></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="flex con_minall">
          <div class="con_min_left">
            <ul>
              <li :class="active==1?'bg-white': 'default_bg' " @click="checkTab(1)" class="flex justify-center items-center">
                <img src="../assets/image/msgcheck_icon.png" alt="">
                <h2>任务信息</h2>
              </li>
              <li :class="active==2?'bg-white': 'default_bg' " @click="checkTab(2)" class="flex justify-center items-center">
                <img src="../assets/image/logcheck_icon.png" alt="">
                <h2>任务日志</h2>
              </li>
              <li :class="active==3?'bg-white': 'default_bg' " @click="checkTab(3)" class="flex justify-center items-center ">
                <img src="../assets/image/filecheck_icon.png" alt="">
                <h2>任务文件</h2>
              </li>
            </ul>
          </div>
          <div class="con_min_right">
            <div v-if="xinxiFlag" class="xinxi">
              <div class="flex justify-between items-center px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="../assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer">返回</span>
                </div>
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="../assets/image/duoxuankuangqueding.png" alt="">
                  <h2 class="text-2xl text-red-500 font-bold">确认管辖法院</h2>
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
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base">风控预警</span>
                  <div class="w-4/5 text-red-500 text-base">
                    2019-10-30 张力虹 上报风控：当事人原件丢失
                  </div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base">任务介绍</span>
                  <div class="w-4/5 pr-32 text-sm">
                    按流程和逻辑绘制SOP项目的流程图，使用软件：omnigraffle，要求：按照不同的角色（如谈案律师、谈案助理、系统、办案律师、辅庭律师、财务、行政、法院、风控、快递公司、保险公司等）进行分类，将各角色需要做的工作分别绘制在该角色下，同时，各类角色的工作使用颜色进行区分。SOP中的38个流程分别进行绘制，每个流程绘制一份流程图，按照该流程的步骤，使用箭头标注该流程的进展情况。注意，对于复杂的流程，注意细分步骤。
                  </div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base">任务信息</span>
                  <div class="w-4/5 pr-32 text-sm">
                    <div class="pb-2">项目及分组：<span>张三诉李四离婚纠纷案   立案与缴费</span></div>
                    <div class="pb-2">任务及时间：<span>张三诉李四离婚纠纷案   立案与缴费</span></div>
                    <div class="flex pb-2">
                      <div class="w-1/2">
                        负责人：<span>力虹</span>
                      </div>
                      <div class="w-1/2">
                        审核人：<span>梦蝶</span>
                      </div>
                    </div>
                    <div class="flex pb-2">
                      <div class="w-1/2">
                        任务成员：
                        <ul class="flex flex-wrap mt-3">
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                        </ul>
                      </div>
                      <div class="w-1/2">
                        协作人：
                        <ul class="flex flex-wrap mt-3">
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
                          <li class="px-1 border mr-3 border-blue-500 text-blue-500 font-bold mb-2 rounded">大海</li>
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
                        任务日志：<span>1</span>
                      </div>
                      <div class="w-1/2">
                        任务文件：<span>2</span>
                      </div>
                    </div>
                    <div class="flex pb-2">
                      <div class="w-1/2">
                        任务协作：<span>1</span>
                      </div>
                      <div class="w-1/2">
                        任务讨论：<span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base">动态</span>
                  <div class="w-4/5 pr-32 text-sm">
                    按流程和逻辑绘制SOP项目的流程图，使用软件：omnigraffle，要求：按照不同的角色（如谈案律师、谈案助理、系统、办案律师、辅庭律师、财务、行政、法院、风控、快递公司、保险公司等）进行分类，将各角色需要做的工作分别绘制在该角色下，同时，各类角色的工作使用颜色进行区分。SOP中的38个流程分别进行绘制，每个流程绘制一份流程图，按照该流程的步骤，使用箭头标注该流程的进展情况。注意，对于复杂的流程，注意细分步骤。
                  </div>
                </div>
                <div class="flex py-3 justify-start">
                  <span class="w-1/5 text-center text-base">讨论</span>
                  <div class="w-4/5 pr-32 text-sm">
                    按流程和逻辑绘制SOP项目的流程图，使用软件：omnigraffle，要求：按照不同的角色（如谈案律师、谈案助理、系统、办案律师、辅庭律师、财务、行政、法院、风控、快递公司、保险公司等）进行分类，将各角色需要做的工作分别绘制在该角色下，同时，各类角色的工作使用颜色进行区分。SOP中的38个流程分别进行绘制，每个流程绘制一份流程图，按照该流程的步骤，使用箭头标注该流程的进展情况。注意，对于复杂的流程，注意细分步骤。
                  </div>
                </div>
              </div>
            </div>
            <div v-if="rizhiFlag" class="rizhi">
              <div class="flex justify-between items-center px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="../assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer">返回</span>
                </div>
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="../assets/image/duoxuankuangqueding.png" alt="">
                  <h2 class="text-2xl text-red-500 font-bold">确认管辖法院</h2>
                </div>
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="../assets/image/edit_icon.png" alt="">
                  <span @click="openrizhiForm" class="text-lg">填写日志</span>
                </div>
              </div>
              <div class="px-10 pb-10 rizhi_min">
                <ul>
                  <li>
                    <div class="py-2 flex text-sm">
                      <span class="block mr-3 font-bold">2020-09-30 20:20</span>
                      <span class="block text-blue-500">收起编辑历史</span>
                    </div>
                    <div class="py-2 flex justify-start items-start">
                      <span class="block mr-2 border border-blue-500 text-blue-500 text-sm px-1 font-bold rounded">力虹</span>
                      <span class="block text-xs">张力虹 查询案件管辖法院为XXX法院，立案地点为XXXXXX</span>
                    </div>
                    <div class="pl-6 py-2 flex flex-wrap">
                      <div class="imagetype">
                        <img class="mx-3" src="../assets/image/image_icon.png" alt="">
                        <span>张三身份证.jpg</span>
                      </div>
                      <div class="imagetype">
                        <img class="mx-3" src="../assets/image/image_icon.png" alt="">
                        <span>张三身份证.jpg</span>
                      </div>
                      <div class="imagetype">
                        <img class="mx-3" src="../assets/image/image_icon.png" alt="">
                        <span>张三身份证.jpg</span>
                      </div>
                      <div class="imagetype">
                        <img class="mx-3" src="../assets/image/image_icon.png" alt="">
                        <span>张三身份证.jpg</span>
                      </div>
                      <div class="imagetype">
                        <img class="mx-3" src="../assets/image/image_icon.png" alt="">
                        <span>张三身份证.jpg</span>
                      </div>
                    </div>
                    <div class="pl-6 py-2">
                      <el-timeline :reverse="reverse">
                        <el-timeline-item
                          v-for="(activity, index) in activities"
                          :key="index"
                          :timestamp="activity.timestamp">
                          {{activity.content}}
                        </el-timeline-item>
                      </el-timeline>
                    </div>
                  </li>
                  <li>
                    <div class="py-2 flex text-sm">
                      <span class="block mr-3 font-bold">2020-09-30 20:20</span>
                      <span class="block text-blue-500">收起编辑历史</span>
                    </div>
                    <div class="py-2 flex justify-start items-start">
                      <span class="block mr-2 border border-blue-500 text-blue-500 text-sm px-1 font-bold rounded">力虹</span>
                      <span class="block text-xs">张力虹 查询案件管辖法院为XXX法院，立案地点为XXXXXX</span>
                    </div>
                  </li>
                  <li>
                    <div class="py-2 flex text-sm">
                      <span class="block mr-3 font-bold">2020-09-30 20:20</span>
                      <span class="block text-blue-500">收起编辑历史</span>
                    </div>
                    <div class="py-2 flex justify-start items-start">
                      <span class="block mr-2 border border-blue-500 text-blue-500 text-sm px-1 font-bold rounded">力虹</span>
                      <span class="block text-xs w-5/6">按流程和逻辑绘制SOP项目的流程图，使用软件：omnigraffle，要求：按照不同的角色（如谈案律师、谈案助理、系统、办案律师、辅庭律师、财务、行政、法院、风控、快递公司、保险公司等）进行分类，将各角色需要做的工作分别绘制在该角色下，同时，各类角色的工作使用颜色进行区分。SOP中的38个流程分别进行绘制，每个流程绘制一份流程图，按照该流程的步骤，使用箭头标注该流程的进展情况。</span>
                    </div>
                  </li>
                  <li>
                    <div class="py-2 flex text-sm">
                      <span class="block mr-3 font-bold">2020-09-30 20:20</span>
                      <span class="block text-blue-500">收起编辑历史</span>
                    </div>
                    <div class="py-2 flex justify-start items-start">
                      <span class="block mr-2 border border-blue-500 text-blue-500 text-sm px-1 font-bold rounded">力虹</span>
                      <span class="block text-xs w-5/6">按流程和逻辑绘制SOP项目的流程图，使用软件：omnigraffle，要求：按照不同的角色（如谈案律师、谈案助理、系统、办案律师、辅庭律师、财务、行政、法院、风控、快递公司、保险公司等）进行分类，将各角色需要做的工作分别绘制在该角色下，同时，各类角色的工作使用颜色进行区分。</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="py-10 w-1/2 mx-auto">
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
                  <img class="mr-3" src="../assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer text-gray-500">返回</span>
                </div>
                <div class="text-center">
                  <h2 class="text-2xl text-red-500 font-bold mb-5">确认管辖法院</h2>
                  <h3 class="text-xl text-gray-500 font-bold">张三诉讼李四离婚纠纷案件</h3>
                </div>
                <div class="text-left">
                  <div class="flex justify-start items-center mb-5">
                    <img class="mr-3" src="../assets/image/upload_icon.png" alt="">
                    <span class="text-base text-gray-500">上传文件</span>
                  </div>
                  <div class="flex justify-start items-center">
                    <img class="mr-3" src="../assets/image/addfile_icon.png" alt="">
                    <span class="text-base text-gray-500">新建文件夹</span>
                  </div>
                </div>
              </div>
              <div class="wenjian_min px-10 pb-10">
                <div class="flex justify-end items-center">
                  <div class="flex items-center mr-5">
                    <img class="mr-2" src="../assets/image/liebiao_icon.png" alt="">
                    <h2 class="text-red-500 font-bold">列表模式</h2>
                  </div>
                  <div class="flex items-center">
                    <img class="mr-2" src="../assets/image/suolue_icon.png" alt="">
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
                            <img class="mr-2" src="../assets/image/file_icon.png" alt="">
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
                              <img class="mx-auto cursor-pointer" src="../assets/image/soon_icon.png" alt="">
                            </el-tooltip>
                          </div>
                        </li>
                        <li class="text-base flex justify-center items-center text-gray-500 py-2 border-b border-gray-300">
                          <div class="w-1/4 text-left flex items-center">
                            <img class="mr-2" src="../assets/image/file_icon.png" alt="">
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
                              <img class="mx-auto cursor-pointer" src="../assets/image/soon_icon.png" alt="">
                            </el-tooltip>
                          </div>
                        </li>
                        <li class="text-base flex justify-center items-center text-gray-500 py-2 border-b border-gray-300">
                          <div class="w-1/4 text-left flex items-center">
                            <img class="mr-2" src="../assets/image/file_icon.png" alt="">
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
                              <img class="mx-auto cursor-pointer" src="../assets/image/soon_icon.png" alt="">
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
                  <img class="mr-3" src="../assets/image/back_icon.png" alt="">
                  <span @click="goBack" class="text-lg cursor-pointer">返回</span>
                </div>
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="../assets/image/duoxuankuangqueding.png" alt="">
                  <h2 class="text-2xl text-red-500 font-bold">确认管辖法院</h2>
                </div>
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="../assets/image/edit_icon.png" alt="">
                  <span @click="openrizhiForm" class="text-lg">填写日志</span>
                </div>
              </div>
              <img class="mt-10 notaskimg" src="../assets/image/notasklog.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 任务日志弹窗 -->
    <el-dialog title="" :visible.sync="dialogLog" center width="720px">
      <div class="flex justify-center items-center py-2">
        <img v-if="checkedLog" class="mr-2" src="../assets/image/duoxuankuangqueding.png" alt="">
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
  import head_common from "./partials/head_common.vue"
  import {addInspectionTask, deleteInspectionTask, selectInspectionTask, selectSurplusInspectionTask} from '@/api/api/requestLogin.js' // 添加，删除，查找项目自检项
  export default{
    name:'TaskManagement',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        visible:false,
        ins:1,
        active: 1,
        LogLabelWidth: '120px',
        xinxiFlag: true,  // 任务信息默认显示
        rizhiFlag: false,  // 任务日志默认隐藏
        wenjianFlag: false, // 任务文件默认隐藏
        notaskFlag: false, // 没有任务日志
        dialogConfigRenWu: false, // 任务设置弹框开关
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
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        // 时间轴
        reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }],
        // 分页
        currentPage1: 5,
      }
    },
    mounted(){

    },
    methods:{
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
          this.active =3
          this.xinxiFlag = false
          this.rizhiFlag = false
          this.wenjianFlag = true
          this.notaskFlag = false
        }
      },
      textbtn () { // 重命名
        alert(1)
      },
      goBack () { // 返回任务管理页面
        this.$router.replace("/TaskManagement")
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
      },
      // 分页
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
 .inputcon{width: 83.3% !important;}
 .default_bg{background-color: #e7e7e7;;}
</style>
