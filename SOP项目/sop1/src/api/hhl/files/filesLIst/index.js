import request from '@/plugin/axios'

export function filesLIst (data) {
    return request({
        url: '/sop_api/v1/files/select_files/'+data.fileId+"?page="+data.page,
        method: 'get',
    })
}