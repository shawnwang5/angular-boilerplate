import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

import { CustomFormsModule } from 'ng2-validation'
import { NgxPaginationModule } from 'ngx-pagination'
import { ClickOutsideModule } from 'ng-click-outside'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { UIPluginsModule } from './ui-plugins/index.module'
import { UtilPluginsModule } from './util-plugins/index.module'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        HttpModule,
        HttpClientModule,
        ClickOutsideModule,
        UIPluginsModule,
        UtilPluginsModule,
        NgxPaginationModule,
        PaginationModule.forRoot()
    ],
    declarations: [],
    exports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        ClickOutsideModule,
        NgxPaginationModule,
        UIPluginsModule,
        UtilPluginsModule,
        PaginationModule
    ]
})
export class SharedModule {
}
