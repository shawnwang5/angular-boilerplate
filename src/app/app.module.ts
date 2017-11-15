import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { NgReduxModule } from '@angular-redux/store'

import { AppComponent } from './app.component'
import { RoutesModule } from './routes/routes.module'
import { LayoutModule } from './layout/layout.module'
import { CoreModule } from './core/core.module'
import { TranslateUniversalLoader } from './core/translator/translate-universal-loader.service'
import { StoreModule } from './store/store.module'

@NgModule({
    imports: [
        RoutesModule,
        NgReduxModule,
        LayoutModule,
        StoreModule,
        CoreModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: TranslateUniversalLoader
            }
        }),
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
