import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { TranslateModule } from '@ngx-translate/core'

import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SharedModule } from '../shared/shared.module'
import { LayoutChildGuardService } from './layout-child-guard.service'
import { SimpleLayerComponent } from './simple-layer/simple-layer.component'
import { SimpleLayerService } from './simple-layer/simple-layer.service'

@NgModule({
    imports: [
        SharedModule,
        TranslateModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SimpleLayerComponent,
        FooterComponent
    ],
    providers: [
        LayoutChildGuardService,
        SimpleLayerService
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
