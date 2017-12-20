import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { UIPluginsModule } from './ui-plugins/index.module'
import { UtilPluginsModule } from './util-plugins/index.module'
import { MyBootstrapModule } from '../bootstrap/index.module'
import { ClickOutsideModule } from 'ng-click-outside'
import { NgxPageScrollModule } from 'ngx-page-scroll'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        MyBootstrapModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        NgxPageScrollModule,
        HttpModule,
        HttpClientModule,
        UIPluginsModule,
        UtilPluginsModule
    ],
    declarations: [],
    exports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        NgxPageScrollModule,
        MyBootstrapModule,
        UIPluginsModule,
        UtilPluginsModule
    ]
})
export class SharedModule {
}
