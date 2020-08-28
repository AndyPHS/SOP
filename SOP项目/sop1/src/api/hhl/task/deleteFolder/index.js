import request from '@/plugin/axios'

export function deleteFolder (data) {
    return request({
        url: '/sop_api/v1/files/delete_file_path/'+data.id,
        method: 'delete'
    })
}