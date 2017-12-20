import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
    selector: 'app-page',
    templateUrl: './index.page.html',
    styleUrls: [ './index.page.scss' ]
})
export class TablePageComponent implements OnInit {
    @ViewChild('page') page
    @ViewChild('sourceCode') sourceCode

    constructor () {
    }

    ngOnInit () {
    }

    onReadSourceCode () {
        this.sourceCode.scrollToSourceCode(this.page.nativeElement)
    }
}
