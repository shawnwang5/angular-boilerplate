import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { IndexPageComponent } from './page/index.page'
import { IndexComponent } from './component/index.component'
import { LayerComponent } from './layer/index.component'

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        IndexComponent,
        LayerComponent,
        IndexPageComponent
    ]
})
export class IndexModule {
}
