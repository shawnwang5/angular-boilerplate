import { Injectable } from '@angular/core'
import { ISimpleLayerConfig } from './ISimpleLayerConfig'

const DEFAULT_CONFIG: ISimpleLayerConfig = {
    content: '内容',
    showNoBtn: false
}

@Injectable()
export class SimpleLayerService {
    isShow = false
    config = DEFAULT_CONFIG

    constructor () {
    }

    show (config: ISimpleLayerConfig) {
        this.config = config
        this.isShow = true
        document.body.classList.add('stop-scroll')
    }

    hide () {
        this.isShow = false
        document.body.classList.remove('stop-scroll')
    }
}
