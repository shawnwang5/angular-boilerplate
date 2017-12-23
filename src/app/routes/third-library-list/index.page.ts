import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-third-library-list',
    templateUrl: './index.page.html',
    styleUrls: [ './index.page.scss' ]
})
export class ThirdLibraryListPageComponent implements OnInit {
    listContent = require('html-loader!markdown-loader!./third-library-list.md')
    constructor () {
    }

    ngOnInit (): void {
    }
}
