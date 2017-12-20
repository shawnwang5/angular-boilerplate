import { NgModule } from '@angular/core'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { TabsModule } from 'ngx-bootstrap/tabs'

@NgModule({
    imports: [
        TabsModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [],
    exports: [
        PaginationModule,
        TabsModule
    ]
})
export class MyBootstrapModule {
}
