import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/components/login')  // 登录
const Users = () => import('@/components/users/Users')  // 用户页面
const UsersPermission = () => import('@/components/users/UsersPermission')  // 用户权限页面
const UsersRole = () => import('@/components/users/UsersRole')  // 用户角色页面
const TaskManagement = () => import('@/components/task/TaskManagement')  // 任务管理页面
const TaskCon = () => import('@/components/task/TaskCon')    // 任务信息页面
const taskFileList = () => import('@/components/hhl/taskFile/taskFileList')
const TaskFile = () => import('@/components/task/TaskFile')  // 任务文件夹详情页面
const taskPreview = () => import('@/components/hhl/taskFile/taskPreview')
const taskFileall = () => import('@/components/hhl/taskFile/taskFileall')  // 任务文件夹页面
const taskFileUpload = () => import('@/components/hhl/taskFile/taskFileUpload') // 任务文件上传页面
// 讨论
const ViewImage = () => import('@/components/ViewImage')  // 预览任务图片
const discussList = () => import('@/components/hhl/discuss/discussList')
const discussListAll = () => import('@/components/hhl/discuss/discussListAll')
const discussUpload = () => import('@/components/hhl/discuss/discussUpload')
// 项目
const projectManagement = () => import('@/components/project/projectManagement') // 项目管理
const projectXinxi = () => import('@/components/project/projectXinxi') // 项目信息
const projectTask = () => import('@/components/project/projectTask') // 项目任务
const projectLog = () => import('@/components/project/projectLog') // 项目日志

const projectFileall = () => import('@/components/project/projectFileall') // 项目文件夹
const projectFile = () => import('@/components/project/projectFile') // 项目文件
const projectFileUpload = () => import('@/components/project/projectFileUpload') // 项目文件

const messageList = () => import('@/components/hhl/swoole/messageList') // 信息列表页
const messageCon = () => import('@/components/message/messageCon') // 信息详情页
const messagexitong = () => import('@/components/hhl/swoole/messagexitong') // 系统消息
const messagegonggao = () => import('@/components/hhl/swoole/messagegonggao') // 公告消息
const messagefenxiang = () => import('@/components/hhl/swoole/messagefenxiang') // 分享消息
const view = () => import('@/components/view')

// 小海
const swoole = () => import('@/components/hhl/swoole')  // 信息回复


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
    {path: '/taskFileUpload/:dpId/:type/:folderId', name: 'taskFileUpload', component: taskFileUpload,meta: {title: '项目文件上传',type: 'login'}},
    // 任务文件夹详情页面
    {path: '/taskFileall/:dpId/:type', name: 'taskFileall', component: taskFileall,meta: {title: '任务文件',type: 'login'}},
    {path: '/taskFileList/:dpId/:type/:folderId', name: 'taskFileList', component: taskFileList,meta: {title: '项目文件',type: '项目文件'}},
    // 查看任务图片
    {path: '/ViewImage', name: 'ViewImage', component: ViewImage,meta: {title: '预览图片',type: 'login'}},
    {path: '/taskPreview', name: 'taskPreview', component: taskPreview,meta: {title: '项目文件预览',type: 'login'}},
    // 项目管理页面
    {path: '/projectManagement', name: 'projectManagement', component: projectManagement,meta: {title: '项目管理',type: 'login'}},
    // 项目信息
    {path: '/projectXinxi', name: 'projectXinxi', component: projectXinxi,meta: {title: '项目信息',type: 'login'}},
    // 项目任务
    {path: '/projectTask', name: 'projectTask', component: projectTask,meta: {title: '项目任务',type: 'login'}},
    // 项目日志
    {path: '/projectLog', name: 'projectLog', component: projectLog,meta: {title: '项目日志',type: 'login'}},

    // 项目文件夹
    {path: '/projectFileall', name: 'projectFileall', component: projectFileall,meta: {title: '项目文件',type: 'login'}},
    // 项目文件夹
    {path: '/projectFile', name: 'projectFile', component: projectFile,meta: {title: '项目文件',type: 'login'}},
    // 项目文件
    {path: '/projectFileUpload', name: 'projectFileUpload', component: projectFileUpload,meta: {title: '项目文件',type: 'login'}},
    // 讨论
    {path: '/discussList/:pid/:tid/:type', name: 'discussList', component: discussList,meta: {title: '讨论列表',type: '讨论列表'}},
    {path: '/discussListAll/:pid/:tid/:type', name: 'discussListAll', component: discussListAll,meta: {title: '讨论列表全',type: '讨论列表全'}},
    {path: '/discussUpload/:pid/:tid', name: 'discussUpload', component: discussUpload,meta: {title: '讨论上传',type: '讨论上传'}},
    // 消息列表页
    {path: '/messageList', name: 'messageList', component: messageList,meta: {title: '消息管理',type: 'login'}},
    // 消息详情页
    {path: '/messageCon', name: 'messageCon', component: messageCon,meta: {title: '消息管理',type: 'login'}},
    // 系统消息
    {path: '/messagexitong', name: 'messagexitong', component: messagexitong,meta: {title: '系统消息',type: 'login'}},
    // 公告消息
    {path: '/messagegonggao', name: 'messagegonggao', component: messagegonggao,meta: {title: '消息通知',type: 'login'}},
    // 分享消息
    {path: '/messagefenxiang', name: 'messagefenxiang', component: messagefenxiang,meta: {title: '分享消息',type: 'login'}},
    // 预览功能
    {path: '/view', name: 'view', component: view,meta: {title: '首页',type: 'view'}},

    // 测试页面
    {path: '/text', name: 'text', component: text,meta: {title: '首页',type: 'text'}},

    // 小海
    //消息
    {path: '/swoole', name: 'swoole', component: swoole,meta: {title: 'swoole消息提示',type: 'swoole消息提示'}},

  ]
})
