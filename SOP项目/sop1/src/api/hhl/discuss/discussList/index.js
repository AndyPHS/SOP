import request from '@/plugin/axios'

export function discussList (data) {
    return request({
        url: '/sop_api/v1/discuss/select_discuss/',
        method: 'post',
        data
    })
}