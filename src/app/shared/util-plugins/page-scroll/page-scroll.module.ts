import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Ng2PageScrollModule, PageScrollConfig } from 'ng2-page-scroll'

@NgModule({
    imports: [
        CommonModule,
        Ng2PageScrollModule
    ],
    declarations: []
})
export class PageScrollModule {
    constructor () {
        PageScrollConfig.defaultDuration = 300
    }
}
