import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class FileHttpService {
    constructor (private http: Http) {
    }

    uploadFile (url, params, requestFinish, uploadCallback) {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                requestFinish(xhr.response, xhr.status)
            }
        }
        xhr.upload.onprogress = (event) => {
            uploadCallback(event.loaded, event.total)
        }
        xhr.open('POST', url, true)
        xhr.send(params)
        return xhr
    }

}
