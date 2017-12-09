import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { AppComponent } from './app.component'
import { RoutesModule } from './routes/routes.module'
import { LayoutModule } from './layout/layout.module'
import { CoreModule } from './core/core.module'
import { TranslateUniversalLoader } from './core/translator/translate-universal-loader.service'
import { StoreModule } from '@ngrx/store'
import { appReducer } from './store/app/reducer'

@NgModule({
    imports: [
        RoutesModule,
        LayoutModule,
        CoreModule,
        StoreModule.provideStore({
            app: appReducer
        }),
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
