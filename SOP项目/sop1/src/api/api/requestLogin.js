import {apiUrl} from '@/common/js/api.js'
import axios from 'axios'
import qs from 'qs'

// 验证码接口
export const verifyCode = params => {
  return axios({
    method: "GET",
    dataType: 'json',
    url: apiUrl.loginCode,
    data: qs.stringify(params)
  });
};
// 登录
export const requestLogin = params => {
  return axios({
    method: 'post',
    dataType: 'json',
    url: apiUrl.login,
    data: params
  });
};
// 新增用户
export const addUsers = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.addUsers,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 删除用户
export const deleteUser = params => {
  return axios({
    method: "delete",
    dataType: 'json',
    url: apiUrl.deleteUser + '/' + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: qs.stringify(params)
  });
};
// 修改用户
export const updateUser = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.updateUser + '/' + localStorage.getItem('userId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询用户
export const selectUser = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectUser+'?page='+params.page,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 通过用户名查询用户
export const selectUserByName = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectUser+'?name='+params.name,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// usersSelect查找用户基本信息
export const usersSelect = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.usersSelect,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查找部门createdDet
export const createdDet = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.createdDet,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查找部门成员
export const selectDet = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectDet + params + 'DptD',
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询用户角色
export const selectUserRoles = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectUserRoles + '/' + localStorage.getItem('userId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 新增角色
export const addUsersRole = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.addUsersRole,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 删除角色
export const deleteUserRole = params => {
  return axios({
    method: "delete",
    dataType: 'json',
    url: apiUrl.deleteUserRole + '/' + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: qs.stringify(params)
  });
};
// 修改角色
export const updateUserRole = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.updateUserRole + '/' + localStorage.getItem('roleId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询角色
export const selectUserRole = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectUserRole,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询角色权限
export const selectRolePermission = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectRolePermission + '/' + localStorage.getItem('roleId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 新增权限
export const addPermission = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.addPermission,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 删除权限
export const deletePermission = params => {
  return axios({
    method: "delete",
    dataType: 'json',
    url: apiUrl.deletePermission + '/' + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: qs.stringify(params)
  });
};
// 修改权限
export const updatePermission = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.updatePermission + '/' + localStorage.getItem('permissionId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询权限
export const selectPermission = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectPermission,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 新增项目
export const addProject = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.addProject,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 删除项目
export const deleteProject = params => {
  return axios({
    method: "delete",
    dataType: 'json',
    url: apiUrl.deleteProject  + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 恢复项目
export const recoveryDeleteProject = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.recoveryDeleteProject + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询项目
export const selectProject = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectProject + '?status=' + params.status + '&page='+params.page,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询项目类型
export const projectCreated = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.projectCreated,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 关键字搜索项目
export const searchProject = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectProject + '?status=' + params.status + '&title=' + params.title + '&page='+params.page,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询单独项目详细信息
export const selectOnlyProject = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectOnlyProject + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 修改项目
export const updateProject = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.updateProject + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 任务完成度 首选项完成度
export const selectProjectTime = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectProjectTime + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 完成项目
export const completeProject = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.completeProject + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查看全部项目任务
export const projectTask = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.projectTask + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询条件项目任务projectTaskType
export const projectTaskType = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.projectTaskType + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询分组
export const selectProjectGroup = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectProjectGroup + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 新增分组
export const addProjectGroup = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.addProjectGroup + localStorage.getItem('dptId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 删除分组
export const deleteProjectGroup = params => {
  return axios({
    method: "delete",
    dataType: 'json',
    url: apiUrl.deleteProjectGroup  + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 上下移动分组mvGroup
export const mvGroup = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.mvGroup + '?id1=' + params.id1 + '&id2=' + params.id2,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 新增日志addJournal
export const addJournal = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.addJournal,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 修改日志
export const updateJournal = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.updateJournal + localStorage.getItem('OnlyLogId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询项目日志
export const selectJournal = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectJournal + localStorage.getItem('dptId') + '?type=' + params.type + '&dpId=' + params.dpId + '&status=' + params.status + '&order=' + params.order,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询任务日志
export const selectTaskJournal = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectJournal + localStorage.getItem('selectRenwuId') + '?type=' + params.type + '&dpId=' + params.dpId + '&status=' + params.status + '&order=' + params.order,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 关键字查询日志
export const selectJournalKeyword = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectJournal + localStorage.getItem('dptId') + '?type=' + params.type + '&dpId=' + params.dpId + '&status=' + params.status + '&order=' + params.order + '&content=' + params.content,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询单独用户日志
export const selectJournalUserId = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectJournal + localStorage.getItem('dptId') + '?type=' + params.type + '&dpId=' + params.dpId + '&status=' + params.status + '&order=' + params.order + '&userId=' + params.userId,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};

// 查询项目全部任务日志
export const selectProjectTaskJounalAll = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectProjectTaskJounalAll + localStorage.getItem('dptId') + '?page=' + params.page,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 关键字查询项目全部任务日志
export const selectProjectTaskJounalAllKeyword = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectProjectTaskJounalAll + localStorage.getItem('dptId') + '?page=' + params.page + '&content=' + params.content,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 通过用户查询项目全部任务日志
export const selectProjectTaskJounalAllUserId = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectProjectTaskJounalAll + localStorage.getItem('dptId') + '?page=' + params.page + '&userId=' + params.userId,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};

// 新增任务
export const addTask = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.addTask,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 删除任务
export const deleteTask = params => {
  return axios({
    method: "delete",
    dataType: 'json',
    url: apiUrl.deleteTask + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: qs.stringify(params)
  });
};
// 修改任务
export const updateTask = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.updateTask + localStorage.getItem('selectRenwuId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 通过任务类型查询任务列表
export const selectTask = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.selectTask,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};

// 查询任务详情信息
export const selectTaskOnly = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectTaskOnly + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: qs.stringify(params)
  });
};
// 恢复任务recoveryDeleteTask
export const recoveryDeleteTask = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.recoveryDeleteTask + localStorage.getItem('selectRenwuId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 完结任务
export const taskStop = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.taskStop + localStorage.getItem('selectRenwuId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 催促任务
export const cuiCu = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.cuiCu + localStorage.getItem('selectRenwuId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 新增任务自检项addInspectionTask
export const addInspectionTask = params => {
  return axios({
    method: "post",
    dataType: 'json',
    url: apiUrl.addInspectionTask +  localStorage.getItem('selectRenwuId'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 删除任务自检项deleteInspectionTask
export const deleteInspectionTask = params => {
  return axios({
    method: "delete",
    dataType: 'json',
    url: apiUrl.deleteInspectionTask + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询任务全部自检项
export const selectInspectionTask = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectInspectionTask + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询任务剩余自检项
export const selectSurplusInspectionTask = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectSurplusInspectionTask + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询任务自检项状态
export const updateInspectionTaskStatus = params => {
  return axios({
    method: "put",
    dataType: 'json',
    url: apiUrl.updateInspectionTaskStatus + params,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
