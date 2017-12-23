import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-loading',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class LoadingComponent implements OnInit {
    @Input() content = '请等待...'
    @Input() shadeClickable = false

    isShow = false

    constructor () {
    }

    ngOnInit () {
    }

    show () {
        this.isShow = true
    }

    hide () {
        this.isShow = false
    }

    onShadeClick () {
        if (this.shadeClickable) {
            this.hide()
        }
    }
}
