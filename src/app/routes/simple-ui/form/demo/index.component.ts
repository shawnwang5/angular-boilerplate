import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
    selector: 'app-form-demo',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class FormDemoComponent implements OnInit {
    @ViewChild('loading') loading

    selectListData: { text, value }[] = [
        { text: '选择1', value: 1 },
        { text: '选择2', value: 2 },
        { text: '选择3', value: 3 },
        { text: '选择4', value: 4 }
    ]

    constructor () {
    }

    ngOnInit () {
    }
}
