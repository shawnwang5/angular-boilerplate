import { Component, OnInit } from '@angular/core'
import { SimpleLayerService } from './simple-layer.service'

@Component({
    selector: 'app-simple-layer',
    templateUrl: './simple-layer.component.html',
    styleUrls: [ './simple-layer.component.scss' ]
})
export class SimpleLayerComponent implements OnInit {
    constructor (public simpleLayerService: SimpleLayerService) {
    }

    ngOnInit () {
    }

    handleOkBtnClick () {
        this.simpleLayerService.hide()
        if (typeof this.simpleLayerService.config.okFunc === 'function') {
            this.simpleLayerService.config.okFunc()
        }
    }

    handleNoBtnClick () {
        this.simpleLayerService.hide()
        if (typeof this.simpleLayerService.config.noFunc === 'function') {
            this.simpleLayerService.config.noFunc()
        }
    }
}
