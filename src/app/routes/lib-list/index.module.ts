import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { LibListPageComponent } from './index.page'
import { Router, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {path: '', component: LibListPageComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        LibListPageComponent
    ]
})
export class LibListModule {
}
