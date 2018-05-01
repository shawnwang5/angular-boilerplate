import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-lib-list',
    templateUrl: './index.page.html',
    styleUrls: [ './index.page.scss' ]
})
export class LibListPageComponent implements OnInit {
    listContent = require('html-loader!markdown-loader!./lib-list.md')

    constructor () {
    }

    ngOnInit (): void {
    }
}
