import request from '@/plugin/axios'
export function files () {
    return axios({
    method: "post",
        dataType: 'json',
        url: apiUrl.addUsers,
        headers: {Authorization:'bearer ' + localStorage.getItem('token')},
        data: params
    });
};
