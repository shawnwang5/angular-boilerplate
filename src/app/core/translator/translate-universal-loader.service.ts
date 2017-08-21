import { Observable } from 'rxjs/Observable'
import { TranslateLoader } from '@ngx-translate/core'

import { cn } from '../../../assets/i18n/cn/cn'
import { en } from '../../../assets/i18n/en/en'
import { jp } from '../../../assets/i18n/jp/jp'

export class TranslateUniversalLoader implements TranslateLoader {
    constructor () {
    }

    public getTranslation (lang: string): Observable<any> {
        if (lang === 'cn') {
            return Observable.of(cn)
        } else if (lang === 'en') {
            return Observable.of(en)
        } else if (lang === 'jp') {
            return Observable.of(jp)
        }
    }
}
