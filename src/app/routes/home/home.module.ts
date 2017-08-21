import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { IndexPageComponent } from './index/index.page.component'
import { SharedModule } from '../../shared/shared.module'
import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
    { path: '', component: IndexPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        TranslateModule,
        CommonModule
    ],
    declarations: [
        IndexPageComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule {
}
