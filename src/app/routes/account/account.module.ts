import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { LoginPageComponent } from './login/index.page'
import { SharedModule } from '../../shared/shared.module'

const routes: Routes = [
    { path: 'login', component: LoginPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule
    ],
    declarations: [
        LoginPageComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AccountModule {
}
