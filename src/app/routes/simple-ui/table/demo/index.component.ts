import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { listMockData } from './mock'

const COL_PROPS = {
    column1: {
        label: '列1'
    },
    column2: {
        label: '列2'
    },
    column3: {
        label: '列3'
    },
    column4: {
        label: '列4'
    },
    column5: {
        label: '列5'
    },
    column6: {
        label: '列6'
    }
}

@Component({
    selector: 'app-demo-table',
    templateUrl: './index.component.html',
    styleUrls: [ './index.component.scss' ]
})
export class TableDemoComponent implements OnInit {
    @Output() readSourceCode = new EventEmitter()
    colProps = COL_PROPS
    listData = listMockData.page0
    pagination = {
        pageSize: 8,
        pageIndex: 0,
        totalItems: listMockData.totalItems
    }

    constructor () {
    }

    ngOnInit () {
    }

    handlePageChanged (pageIndex) {
        this.listData = listMockData[ 'page' + pageIndex ]
    }

    onReadSourceCodeClick () {
        this.readSourceCode.emit()
    }
}
