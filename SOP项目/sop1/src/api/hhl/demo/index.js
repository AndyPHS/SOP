import request from '@/plugin/axios'

export function demo () {
    return request({
        url: '/sop_api/v1/login/login_code',
        method: 'get',
    })
}