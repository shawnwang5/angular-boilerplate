import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SharedModule } from '../shared/shared.module'
import { LayoutChildGuardService } from './layout-child-guard.service'
import { MenuComponent } from './menu/menu.component'

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent
    ],
    providers: [
        LayoutChildGuardService
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
