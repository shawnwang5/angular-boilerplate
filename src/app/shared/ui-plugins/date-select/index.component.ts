import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-date-select',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class IndexComponent implements OnInit {
    @Input() currYear
    @Input() currMonth
    @Input() yearList: Array<ISelectItem>
    @Input() monthList: Array<ISelectItem>
    @Output('yearChanged') yearChanged = new EventEmitter()
    @Output('monthChanged') monthChanged = new EventEmitter()

    constructor () {
    }

    ngOnInit () {
    }

    handleYearSelectChanged (item: ISelectItem) {
        this.yearChanged.emit(item)
    }

    handleMonthSelectChanged (item: ISelectItem) {
        this.monthChanged.emit(item)
    }
}
