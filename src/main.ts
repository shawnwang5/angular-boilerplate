import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import 'rxjs/Observable'
import 'rxjs/add/operator/filter'

if (environment.production) {
    enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
