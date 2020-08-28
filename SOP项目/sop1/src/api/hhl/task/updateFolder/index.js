import request from '@/plugin/axios'

export function updateFolder (data) {
    return request({
        url: '/sop_api/v1/files/update_file_path/'+data.id,
        method: 'put',
        data
    })
}