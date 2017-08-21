import { Injectable } from '@angular/core'

import { SettingService } from '../core/setting/setting.service'
import { HttpService } from '../core/http/http.service'

@Injectable()
export class DemoApiService {
    languageMap

    constructor (private httpService: HttpService, private settingService: SettingService) {
        this.languageMap = settingService.getLanguageMap()
    }

    private post (url: string, body: any) {
        return new Promise((resolve, reject) => {
            const successFn = (resp) => {
                resolve(resp)
            }
            const errorFn = (resp) => {
                reject(resp)
            }
            this.httpService.post(this.settingService.getServerURL() + url, body, successFn, errorFn)
        })
    }
}

