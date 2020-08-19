import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/components/login')  // 登录
const Users = () => import('@/components/users/Users')  // 用户页面
const UsersPermission = () => import('@/components/users/UsersPermission')  // 用户权限页面
const UsersRole = () => import('@/components/users/UsersRole')  // 用户角色页面
const TaskManagement = () => import('@/components/task/TaskManagement')  // 任务管理页面
const TaskCon = () => import('@/components/task/TaskCon')    // 任务信息页面
const TaskFile = () => import('@/components/task/TaskFile')  // 任务文件夹详情页面
const TaskFileall = () => import('@/components/task/TaskFileall')  // 任务文件夹页面
const TaskFileUpload = () => import('@/components/task/TaskFileUpload') // 任务文件上传页面
const ViewImage = () => import('@/components/ViewImage')  // 预览任务图片
const taskTalk = () => import('@/components/talk/taskTalk')  // 单独项目或者任务讨论列表
const talkStart = () => import('@/components/talk/talkStart') // 发起讨论
const taskTalkModel = () => import('@/components/talk/taskTalkModel') // 讨论模块页面
// 项目
const projectManagement = () => import('@/components/project/projectManagement') // 项目管理
const messageList = () => import('@/components/message/messageList') // 信息列表页
const messageCon = () => import('@/components/message/messageCon') // 信息详情页
const messagexitong = () => import('@/components/message/messagexitong') // 系统消息
const messagegonggao = () => import('@/components/message/messagegonggao') // 公告消息
const messagefenxiang = () => import('@/components/message/messagefenxiang') // 分享消息

import text from '@/components/text'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login,meta: {title: '登录',type: ''}},
    // 用户列表
    {path: '/Users', name: 'Users', component: Users,meta: {title: '用户管理',type: 'login'}},
    // 用户权限列表
    {path: '/UsersPermission', name: 'UsersPermission', component: UsersPermission,meta: {title: '权限管理',type: 'login'}},
    // 用户角色列表
    {path: '/UsersRole', name: 'UsersRole', component: UsersRole,meta: {title: '角色',type: 'login'}},
    // 任务管理页面
    {path: '/TaskManagement', name: 'TaskManagement', component: TaskManagement,meta: {title: '任务管理',type: 'login'}},
    // 任务详情页面
    {path: '/TaskCon', name: 'TaskCon', component: TaskCon,meta: {title: '任务详情',type: 'login'}},
    // 任务文件夹详情页面
    {path: '/TaskFile', name: 'TaskFile', component: TaskFile,meta: {title: '任务文件',type: 'login'}},
    // 任务文件上传页面
    {path: '/TaskFileUpload', name: 'TaskFileUpload', component: TaskFileUpload,meta: {title: '上传文件',type: 'login'}},
    // 任务文件夹详情页面
    {path: '/TaskFileall', name: 'TaskFileall', component: TaskFileall,meta: {title: '任务文件',type: 'login'}},
    // 查看任务图片
    {path: '/ViewImage', name: 'ViewImage', component: ViewImage,meta: {title: '预览图片',type: 'login'}},
    // 单独项目或者人物讨论列表
    {path: '/taskTalk', name: 'taskTalk', component: taskTalk,meta: {title: '讨论管理',type: 'login'}},
    // 讨论模块页面
    {path: '/taskTalkModel', name: 'taskTalkModel', component: taskTalkModel,meta: {title: '讨论管理',type: 'login'}},
    // 项目模块页面
    {path: '/projectManagement', name: 'projectManagement', component: projectManagement,meta: {title: '项目管理',type: 'login'}},
    // 发起讨论
    {path: '/talkStart', name: 'talkStart', component: talkStart,meta: {title: '发起讨论',type: 'login'}},
    // 消息列表页
    {path: '/messageList', name: 'messageList', component: messageList,meta: {title: '消息管理',type: 'login'}},
    // 消息详情页
    {path: '/messageCon', name: 'messageCon', component: messageCon,meta: {title: '消息管理',type: 'login'}},
    // 系统消息
    {path: '/messagexitong', name: 'messagexitong', component: messagexitong,meta: {title: '消息管理',type: 'login'}},
    // 公告消息
    {path: '/messagegonggao', name: 'messagegonggao', component: messagegonggao,meta: {title: '消息管理',type: 'login'}},
    // 分享消息
    {path: '/messagefenxiang', name: 'messagefenxiang', component: messagefenxiang,meta: {title: '消息管理',type: 'login'}},

    // 测试页面
    {path: '/text', name: 'text', component: text,meta: {title: '首页',type: 'text'}}
  ]
})
