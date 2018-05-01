import { HttpUtils } from '../shared/util-plugins/http/http.utils'
import {environment} from '../../environments/environment';

export class DemoApi {
    static getServerURL (path) {
        return environment.apiBaseURL + path
    }

    static post (url: string, params: Object) {
        return HttpUtils.post(url, params)
    }

    static queryXXList () {
        return DemoApi.post(DemoApi.getServerURL('queryXXList'), {})
    }
}