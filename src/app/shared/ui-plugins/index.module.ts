import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SelectModule } from './select/index.module'
import { DateSelectModule } from './date-select/index.module'

@NgModule({
    imports: [
        RouterModule,
        SelectModule,
        DateSelectModule,
        CommonModule
    ],
    declarations: [],
    exports: [
        SelectModule,
        DateSelectModule
    ]
})
export class UIPluginsModule {
}
