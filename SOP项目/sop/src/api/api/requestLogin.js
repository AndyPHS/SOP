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
// 新增任务
export const addTask = params => {
  return axios({
    method: "put",
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
    url: apiUrl.updateTask + localStorage.getItem('tid'),
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: params
  });
};
// 查询任务列表
export const selectTask = params => {
  return axios({
    method: "get",
    dataType: 'json',
    url: apiUrl.selectTask,
    headers: {Authorization:'bearer ' + localStorage.getItem('token')},
    data: qs.stringify(params)
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
