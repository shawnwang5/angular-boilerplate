import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { TableComponent } from './table/index.component'
import { SelectComponent } from './select/index.component'
import { LoadingComponent } from './loading/index.component'

@NgModule({
    imports: [
        RouterModule,
        PaginationModule,
        ClickOutsideModule,
        CommonModule
    ],
    declarations: [
        TableComponent,
        LoadingComponent,
        SelectComponent
    ],
    exports: [
        SelectComponent,
        LoadingComponent,
        TableComponent
    ]
})
export class UIPluginsModule {
}
