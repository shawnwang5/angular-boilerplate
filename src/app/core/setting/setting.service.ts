import { Injectable } from '@angular/core'

@Injectable()
export class SettingService {
    private serverURL = 'https://sandbox.muchencute.com/qyresearch-website-backend/api/'
    // 中文=0，英文=1，日文=2
    private languageMap = { cn: 0, en: 1, jp: 2 }

    getServerURL () {
        return this.serverURL
    }

    getLanguageMap () {
        return this.languageMap
    }
}
