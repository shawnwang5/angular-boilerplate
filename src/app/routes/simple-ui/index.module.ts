import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { TablePageComponent } from './table/index.page'
import { FormPageComponent } from './form/index.page'
import { TablePageModule } from './table/index.module'
import { FormPageModule } from './form/index.module'

const routes: Routes = [
    { path: 'table', component: TablePageComponent },
    { path: 'form', component: FormPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        TablePageModule,
        FormPageModule,
        CommonModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class SimpleUIModule {
}
