import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableDemoComponent } from './demo/index.component'
import { SharedModule } from '../../../shared/shared.module'
import { TablePageComponent } from './index.page'
import { SourceCodeComponent } from './source-code/index.component'

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [
        TableDemoComponent,
        SourceCodeComponent,
        TablePageComponent
    ],
    exports: [
        TablePageComponent
    ]
})
export class TablePageModule {
}
