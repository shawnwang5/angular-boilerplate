import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '../../shared/shared.module'
import { HomePageComponent } from './home/index.page'

const routes: Routes = [
    { path: '', component: HomePageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule
    ],
    declarations: [
        HomePageComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule {
}
