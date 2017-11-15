import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-dialog',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class LayerComponent implements OnInit {
    isShow = false
    title = '标题'

    constructor () {
    }

    ngOnInit (): void {
    }

    show () {
        this.isShow = true
    }

    hide () {
        this.isShow = false
    }

    handleOkBtnClick () {
    }
}
