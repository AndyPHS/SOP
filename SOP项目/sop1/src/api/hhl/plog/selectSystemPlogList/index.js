import request from '@/plugin/axios'

export function selectSystemPlogList (data) {
    return request({
        url: '/sop_api/v1/plog/selectSystemPlogList/'+data.type,
        method: 'get',
    })
}