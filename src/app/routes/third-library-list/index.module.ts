import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { ThirdLibraryListPageComponent } from './index.page'
import { Router, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {path: '', component: ThirdLibraryListPageComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        ThirdLibraryListPageComponent
    ]
})
export class ThirdLibraryListModule {
}
