import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { TranslateModule } from '@ngx-translate/core'

import { CustomFormsModule } from 'ng2-validation'
import { NgxPaginationModule } from 'ngx-pagination'
import { TreeModule } from 'angular-tree-component'
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
        TranslateModule,
        HttpModule,
        HttpClientModule,
        ClickOutsideModule,
        TreeModule,
        UIPluginsModule,
        UtilPluginsModule,
        NgxPaginationModule,
        PaginationModule.forRoot()
    ],
    declarations: [],
    exports: [
        RouterModule,
        TreeModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
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
