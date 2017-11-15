import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { Reducer } from 'redux'

import { StoreActions } from './store.actions'
import { rootReducer } from './store.reducers'
import { IAppState } from './models'
import { INITIAL_STATE } from './initial-state'

@NgModule({
    imports: [
        CommonModule,
        NgReduxModule
    ],
    providers: [
        StoreActions
    ],
    exports: [
        NgReduxModule
    ]
})
export class StoreModule {
    constructor (ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(
            <Reducer<IAppState>>rootReducer,
            INITIAL_STATE
        )
    }
}
