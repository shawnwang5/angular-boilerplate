import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { RoutesModule } from './routes/routes.module'
import { LayoutModule } from './layout/layout.module'
import { StoreModule } from '@ngrx/store'
import { appReducer } from './store/app/reducer'

@NgModule({
    imports: [
        RoutesModule,
        LayoutModule,
        StoreModule.provideStore({
            app: appReducer
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
