import request from '@/plugin/axios'

export function folderList (data) {
    return request({
        url: '/sop_api/v1/files/select_file_path?dpId='+data.dpId+"&type="+data.type,
        method: 'get',
    })
}