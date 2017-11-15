import { Injectable } from '@angular/core'
import { NgRedux } from '@angular-redux/store'
import { IAppState } from './models'

@Injectable()
export class StoreActions {
    constructor (private ngRedux: NgRedux<IAppState>) {
    }
}
