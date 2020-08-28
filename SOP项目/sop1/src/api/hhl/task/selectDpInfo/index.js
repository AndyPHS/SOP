import request from '@/plugin/axios'

export function selectDpInfo (data) {
    return request({
        url: '/sop_api/v1/task/select_dpInfo?id='+data.id+"&type="+data.type,
        method: 'get',
    })
}
