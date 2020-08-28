import request from '@/plugin/axios'

export function taskInfo (data) {
    return request({
        url: '/sop_api/v1/task/select_task_only/'+data.taskId,
        method: 'get',
    })
}