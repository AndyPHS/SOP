import request from '@/plugin/axios'

export function addFolder (data) {
    return request({
        url: '/sop_api/v1/files/add_file_path/',
        method: 'post',
        data
    })
}