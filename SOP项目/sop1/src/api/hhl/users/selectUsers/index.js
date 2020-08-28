import request from '@/plugin/axios'

export function selectUsers (data) {
    return request({
        url: '/sop_api/v1/users/select_user/?name='+data.name,
        method: 'get',
    })
}