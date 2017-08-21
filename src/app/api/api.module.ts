import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DemoApiService } from './demo.api.service'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        DemoApiService
    ],
    exports: []
})
export class ApiModule {
}
