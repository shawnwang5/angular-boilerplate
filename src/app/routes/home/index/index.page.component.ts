import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './index.page.component.html',
    styleUrls: [ './index.page.component.scss' ]
})
export class IndexPageComponent implements OnInit {
    constructor () {
        document.body.scrollTop = 0
    }

    ngOnInit () {
    }
}
