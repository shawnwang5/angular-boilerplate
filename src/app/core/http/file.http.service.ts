import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class FileHttpService {
    constructor (private http: Http) {
    }

    /**
     * 上传文件
     * @param url { function }
     * @param reqParams { FormData }
     * @param requestFinishFn { function }
     * @param progressFn { function }
     * @returns {XMLHttpRequest}
     */
    uploadFile (url, reqParams, requestFinishFn, progressFn) {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                requestFinishFn(JSON.parse(xhr.response), xhr.status)
            }
        }
        xhr.upload.onprogress = (event) => {
            progressFn(event.loaded, event.total)
        }
        xhr.open('POST', url, true)
        xhr.send(reqParams)
        return xhr
    }
}
