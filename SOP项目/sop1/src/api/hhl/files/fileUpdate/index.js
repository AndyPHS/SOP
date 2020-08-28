    import request from '@/plugin/axios'

    export function fileUpdate (data) {
        return request({
            url: '/sop_api/v1/files/update_files/'+data.fileId,
            method: 'post',
            data
        })
    }