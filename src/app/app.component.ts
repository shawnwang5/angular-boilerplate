import { Component, OnInit } from '@angular/core'
import { PageScrollConfig } from 'ngx-page-scroll'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
    constructor () {
    }

    ngOnInit (): void {
        PageScrollConfig.defaultDuration = 300
    }
}
