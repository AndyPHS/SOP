
import request from '@/plugin/axios'

export function temporaryFile (data) {
    return request({
        url: '/sop_api/v1/files/temporaryFile/',
        method: 'post',
        data
    })
}