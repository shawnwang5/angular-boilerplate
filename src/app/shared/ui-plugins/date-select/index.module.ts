import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { IndexComponent } from './index.component'
import { SelectModule } from '../select/index.module'

@NgModule({
    imports: [
        SelectModule,
        CommonModule
    ],
    declarations: [
        IndexComponent
    ],
    exports: [
        IndexComponent
    ]
})
export class DateSelectModule {
}
