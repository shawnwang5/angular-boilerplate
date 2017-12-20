import axios from 'axios'

export class HttpUtils {
    static post (url: string, params: Object) {
        return axios.post(url, params).catch(function (error) {
            console.error(`${url}: ${error.response.data}`)
        })
    }
}
