import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions } from '@angular/http'
import { Router } from '@angular/router'
import swal from 'sweetalert'
import * as Cookies from 'js-cookie'

@Injectable()
export class HttpService {
    appLoginPagePath = '/account/login'

    constructor (private http: Http, private router: Router) {
    }

    post (url: string, body: any, successHandler, errorHandler) {
        const headers = new Headers({
            'Authorization': Cookies.get('QYAuthorization'),
            'Content-Type': 'application/json;charset=utf-8'
        })
        const options = new RequestOptions({ headers })
        const handleError = resp => {
            if (resp.status === 401) {
                swal({
                    title: '您还未登录',
                    timer: 1500,
                    showConfirmButton: false
                })
                this.router.navigate([ this.appLoginPagePath ])
            } else {
                const msg = typeof resp._body === 'string' ? resp._body : '服务器异常'
                errorHandler(msg)
            }
        }
        const request = this.http.post(url, body, options)
        return request.map(resp => resp.json()).subscribe(resp => {
            successHandler(resp)
        }, handleError)
    }
}
