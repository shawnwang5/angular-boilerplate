import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { IndexComponent } from './index.component'
import { ClickOutsideModule } from 'ng-click-outside'

@NgModule({
    imports: [
        RouterModule,
        ClickOutsideModule,
        CommonModule
    ],
    declarations: [
        IndexComponent
    ],
    exports: [
        IndexComponent
    ]
})
export class SelectModule {
}
