import request from '@/plugin/axios'

export function selectOldPlogList () {
    return request({
        url: '/sop_api/v1/plog/selectOldPlogList/',
        method: 'get',
    })
}