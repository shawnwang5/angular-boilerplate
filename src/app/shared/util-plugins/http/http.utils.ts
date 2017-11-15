import swal from 'sweetalert'
import axios from 'axios'

export class HttpUtils {
    static post (url: string, params: Object) {
        return axios.post(url, params).catch(function (error) {
            swal({
                title: '提示',
                text: error.response.data,
                html: true
            })
        })
    }
}
