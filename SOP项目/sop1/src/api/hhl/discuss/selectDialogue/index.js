import request from '@/plugin/axios'

export function selectDialogue (data) {
    return request({
        url: '/sop_api/v1/discuss/select_dialogue/'+data.did,
        method: 'get',
    })
}