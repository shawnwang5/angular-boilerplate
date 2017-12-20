import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core'

@Component({
    selector: 'app-table',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class TableComponent implements OnInit, OnChanges {
    @Input() tableData: Array<object>
    @Input() colProps: object
    @Input() totalItems: number
    @Input() hasPagination = true
    @Input() pageSize: number
    @Input() headerTpl: TemplateRef<any>
    @Input() bodyTpl: TemplateRef<any>
    @Output('pageChanged') pageChanged = new EventEmitter()

    totalPages = 0

    constructor () {
    }

    ngOnInit () {
    }

    ngOnChanges (changes: SimpleChanges): void {
        this.setTotalPages()
    }

    setTotalPages () {
        if (this.totalItems % this.pageSize === 0) {
            this.totalPages = this.totalItems / this.pageSize
        } else {
            this.totalPages = Math.floor(this.totalItems / this.pageSize) + 1
        }
    }

    addTableNoToTableData () {
        this.tableData.forEach((item, index) => (<any>item).tableNo = index + 1)
        return this.tableData
    }

    getColPropsKeys () {
        return Object.keys(this.colProps)
    }

    handlePageChanged ({ page }) {
        const pageIndex = page - 1
        this.pageChanged.emit(pageIndex)
    }
}
