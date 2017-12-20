import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

export interface ISelectItem {
    value: string
    text: string
}

@Component({
    selector: 'app-select',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class SelectComponent implements OnInit {
    @Input() currText = ''
    @Input() dataList: Array<ISelectItem>
    @Output('selectChanged') selectChanged = new EventEmitter()
    isShowSelectUL = false

    constructor () {
    }

    ngOnInit () {
    }

    show () {
        this.isShowSelectUL = true
    }

    hide () {
        this.isShowSelectUL = false
    }

    toggle () {
        this.isShowSelectUL = !this.isShowSelectUL
    }

    handleSelectItemClick ({ text, value }) {
        this.currText = text
        this.selectChanged.emit({ text, value })
        this.hide()
    }

    handleClickedOutside () {
        console.log(1111)
        this.hide()
    }
}
