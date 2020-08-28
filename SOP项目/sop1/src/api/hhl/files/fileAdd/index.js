import request from '@/plugin/axios'

export function fileAdd (data) {
    return request({
        url: '/sop_api/v1/files/add_files/',
        method: 'post',
        data
    })
}