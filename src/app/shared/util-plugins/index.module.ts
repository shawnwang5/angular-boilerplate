import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { PageScrollModule } from './page-scroll/page-scroll.module'

@NgModule({
    imports: [
        RouterModule,
        PageScrollModule,
        CommonModule
    ],
    declarations: [],
    exports: []
})
export class UtilPluginsModule {
}
