import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FileHttpService } from './http/file.http.service'
import { HttpService } from './http/http.service'
import { SettingService } from './setting/setting.service'
import { TranslatorService } from './translator/translator.service'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        FileHttpService,
        TranslatorService,
        HttpService,
        SettingService
    ]
})
export class CoreModule {
}
