import { Component, Inject, OnInit } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll'

@Component({
    selector: 'app-source-code',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class SourceCodeComponent implements OnInit {
    sourceCode = {
        template: require('!raw-loader!../demo/index.component.html'),
        component: require('!raw-loader!../demo/index.component'),
        mockData: require('!raw-loader!../demo/mock')
    }

    constructor (private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    }

    ngOnInit () {
    }

    scrollToSourceCode (scrollView) {
        this.pageScrollService.start(PageScrollInstance.newInstance({
            document: this.document,
            scrollTarget: '#sourceCode',
            scrollingViews: [ scrollView ]
        }))
    }
}
