import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-source-code',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class SourceCodeComponent implements OnInit {
    sourceCode = {
        template: require('!raw-loader!../demo/index.component.html'),
        component: require('!raw-loader!../demo/index.component')
    }

    constructor () {
    }

    ngOnInit () {
    }
}
