import request from '@/plugin/axios'

export function addDiscuss (data) {
    return request({
        url: '/sop_api/v1/discuss/add_discuss/',
        method: 'post',
        data
    })
}