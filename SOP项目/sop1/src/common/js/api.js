/**
 * api接口统一管理
 */

// import { get, post } from './http'
// http://www.baiodu.com/api/v1/users/my_address/address_edit_before
// 环境配置
var environment = {
  onLine: "线上地址",
  // dev:"测试环境地址",
  dev: '/',
  devOfflin:"http://192.168.1.242/h5"
}
// 接口前缀
var host = location.host,
  baseHost = '',
  baseURL = '',
  baseLiHunURL = '',
  adminBaseURL, compBaseURL

if(host.indexOf('线上环境') > -1){
  //线上环境
  baseHost = environment.onLine
}else {
  //测试环境
  baseHost = environment.dev
}
baseURL = baseHost + 'sop_api/v1/'
baseLiHunURL = baseHost + 'Questionnaire/v1/'
//接口集合
const apiUrl = {
  // 登录
  login: baseURL + 'login/login',
  // 登录验证
  loginCode: baseURL + 'login/login_code',
  // 提交注册
  register: baseURL + 'users/systemRegister',
  // 新增用户
  addUsers: baseURL + 'users/add_user',
  // 删除用户
  deleteUser: baseURL + 'users/delete_user/',
  // 修改用户
  updateUser: baseURL + 'users/update_user',
  // 查找用户
  selectUser: baseURL + 'users/select_user',
  // 查找用户角色
  selectUserRoles: baseURL + 'users/select_user_roles',
  // 查找用户基本信息
  usersSelect: baseURL + 'user/select',
  // 查找部门
  createdDet: baseURL + 'users/created_det',
  // 查找部门成员
  selectDet: baseURL + 'users/select_det/',
  // 新增权限
  addPermission: baseURL + 'users/add_permission',
  // 删除权限
  deletePermission: baseURL + 'users/delete_permission',
  // 修改权限
  updatePermission: baseURL + 'users/update_permission',
  // 查询权限
  selectPermission: baseURL + 'users/select_permission',
  // 添加角色
  addUsersRole: baseURL + 'users/add_role',
  // 删除角色
  deleteUserRole: baseURL + 'users/delete_role',
  // 修改角色
  updateUserRole: baseURL + 'users/update_role',
  // 查询角色
  selectUserRole: baseURL + 'users/select_role',
  // 查询角色权限
  selectRolePermission: baseURL + 'users/select_role_permission/',

  // 项目模块
  // 新增项目
  addProject: baseURL + 'project/add_project',
  // 删除项目/project/delete_project/{dptId}
  deleteProject: baseURL + 'project/delete_project/',
  // 修改项目/project/update_project/{dptId}
  updateProject: baseURL + 'project/update_project/',
  // 查询项目
  selectProject: baseURL + 'project/select_project',
  // 项目类型project/created/
  projectCreated: baseURL + 'project/created/',
  // 查询单独项目详细信息/project/select_only_project/{pid}
  selectOnlyProject: baseURL + 'project/select_only_project/',
  // 恢复项目project/recovery_delete_project/{pid}
  recoveryDeleteProject: baseURL + 'project/recovery_delete_project/',
  // 任务完成度project/select_project_time/
  selectProjectTime: baseURL + 'project/select_project_time/',
  // 完成项目project/complete_project/
  completeProject: baseURL + 'project/complete_project/',
  // 查看全部项目任务project/projectTask/
  projectTask: baseURL + 'project/projectTask/',
  // 查询条件项目任务project/projectTaskType/
  projectTaskType: baseURL + 'project/projectTaskType/',
  // 查询分组project/select_project_group/
  selectProjectGroup: baseURL + 'project/select_project_group/',
  // 新增分组 project/add_project_group/
  addProjectGroup: baseURL + 'project/add_project_group/',
  // 删除分组 project/delete_project_group/
  deleteProjectGroup: baseURL + 'project/delete_project_group/',
  // 向下移动分组 project/mv_group/
  mvGroup: baseURL + 'project/mv_group/',

 // 日志模块
  // 修改日志journal/update_journal/jid
  updateJournal: baseURL + 'journal/update_journal/',
  // 新增日志journal/add_journal
  addJournal: baseURL + 'journal/add_journal',
  // 查询日志 journal/select_journal/
  selectJournal: baseURL + 'journal/select_journal/',
  // 查询项目全部任务日志journal/select_project_task_jounal_all/
  selectProjectTaskJounalAll: baseURL + 'journal/select_project_task_jounal_all/',

  // 任务模块
  // 新建任务
  addTask: baseURL + 'task/add_task',
  // 删除任务/task/delete_task/{tid}
  deleteTask: baseURL + 'task/delete_task/',
  // 修改任务task/update_task/{tid}
  updateTask: baseURL + 'task/update_task/',
  // 查询任务列表/task/select_task_list
  selectTask: baseURL + 'task/select_task',
  // 查询任务详细信息/task/select_task_only/{tid}
  selectTaskOnly: baseURL + 'task/select_task_only/',
  // 恢复任务task/recovery_delete_task/{tid}
  recoveryDeleteTask: baseURL + 'task/recovery_delete_task/',
  // 完结任务task/task_stop/
  taskStop: baseURL + 'task/task_stop/',
  // 催促任务 task/cuicu/
  cuiCu: baseURL + 'task/cuicu/',

  // 自检项信息
  // 新增任务自检项/task/add_inspection_task/{tid}
  addInspectionTask: baseURL + 'task/add_inspection_task/',
  // 删除任务自检项task/delete_inspection_task/{tid}
  deleteInspectionTask: baseURL + 'task/delete_inspection_task/',
  // 查询任务全部自检项目/task/select_inspection_task/{tid}
  selectInspectionTask: baseURL + 'task/select_inspection_task/',
  // 查询任务剩余自检项task/select_surplus_inspection_task/{tid}
  selectSurplusInspectionTask: baseURL + 'task/select_surplus_inspection_task/',
  // 修改任务自检项状态task/update_inspection_task_status/
  updateInspectionTaskStatus: baseURL + 'task/update_inspection_task_status/'

}
export{
  apiUrl
}
