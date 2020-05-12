import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/components/login')  // 登录
const Users = () => import('@/components/users/Users')  // 用户页面
const UsersPermission = () => import('@/components/users/UsersPermission')  // 用户权限页面
const UsersRole = () => import('@/components/users/UsersRole')  // 用户角色页面
const TaskManagement = () => import('@/components/TaskManagement')  // 用户角色页面
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
    // 测试页面
    {path: '/text', name: 'text', component: text,meta: {title: '首页',type: 'text'}}
  ]
})
