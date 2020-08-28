import request from '@/plugin/axios'

export function projectInfo (data) {
    return request({
        url: '/sop_api/v1/project/select_only_project/'+data.projectId,
        method: 'get',
    })
}