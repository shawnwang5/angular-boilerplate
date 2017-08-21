import { Injectable } from '@angular/core'

import * as Cookies from 'js-cookie'
import { TranslateService } from '@ngx-translate/core'

const DEFAULT_LANGUAGE = 'cn'
const DEFAULT_LANGUAGES = [ {
    text: '中国',
    value: 'cn'
}, {
    text: 'ENGLISH',
    value: 'en'
}, {
    text: '日本の',
    value: 'jp'
} ]

@Injectable()
export class TranslatorService {
    availableLanguages

    constructor (private translate: TranslateService) {
        const languageArray = DEFAULT_LANGUAGES.map(item => item.value)
        translate.addLangs(languageArray)
        const currLanguageSetting = Cookies.getJSON('languageSetting')
        if (currLanguageSetting && currLanguageSetting.currLanguageName) {
            this.availableLanguages = currLanguageSetting.languageList
            this.translate.use(currLanguageSetting.currLanguageName)
        } else {
            this.availableLanguages = DEFAULT_LANGUAGES
            this.setCurrLanguage(DEFAULT_LANGUAGE, this.availableLanguages)
        }
    }

    static setLanguageSettingInCookie (currLanguageName, languageList) {
        Cookies.set('languageSetting', { currLanguageName, languageList }, { expires: 700, path: '/' })
    }

    setCurrLanguage (languageName, languageList) {
        TranslatorService.setLanguageSettingInCookie(languageName, languageList)
        this.translate.use(languageName)
    }

    getTranslatedValue (key) {
        return this.translate.get(key)
    }

    getCurrentLanguage () {
        return this.translate.currentLang
    }

    getAvailableLanguages () {
        return this.availableLanguages
    }
}
