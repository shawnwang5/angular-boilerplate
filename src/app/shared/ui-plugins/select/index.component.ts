import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-select',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class IndexComponent implements OnInit {
    isShowSelectUL = false

    @Input() currText
    @Input() dataList: Array<ISelectItem>
    @Output('selectChanged') selectChanged = new EventEmitter()

    constructor () {
    }

    ngOnInit () {
    }

    handleSelectItemClick (item: ISelectItem) {
        this.isShowSelectUL = false
        this.currText = item.text
        this.selectChanged.emit(item)
    }

    handleClickedOutside () {
        this.isShowSelectUL = false
    }
}
