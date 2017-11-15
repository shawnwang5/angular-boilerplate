import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './home.page.component.html',
    styleUrls: [ './home.page.component.scss' ]
})
export class HomePageComponent implements OnInit {
    constructor () {
        document.body.scrollTop = 0
    }

    ngOnInit () {
    }
}
