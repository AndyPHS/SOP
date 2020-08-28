import request from '@/plugin/axios'

export function fileDelete (data) {
    return request({
        url: '/sop_api/v1/files/delete_files/'+data.fileId,
        method: 'delete',
    })
}