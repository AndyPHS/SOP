import request from '@/plugin/axios'

export function addDialogue (data) {
    return request({
        url: '/sop_api/v1/discuss/add_dialogue/'+data.did,
        method: 'post',
        data
    })
}