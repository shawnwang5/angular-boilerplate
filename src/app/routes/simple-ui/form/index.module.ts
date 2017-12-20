import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormDemoComponent } from './demo/index.component'
import { SharedModule } from '../../../shared/shared.module'
import { SourceCodeComponent } from './source-code/index.component'
import { FormPageComponent } from './index.page'

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [
        FormDemoComponent,
        SourceCodeComponent,
        FormPageComponent
    ],
    exports: [
        FormPageComponent
    ]
})
export class FormPageModule {
}
