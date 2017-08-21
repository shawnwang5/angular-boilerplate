import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store'
import { Reducer } from 'redux'

import { StoreActions } from './store.actions'
import { INITIAL_STATE, rootReducer } from './store.reducers'
import { IAppState } from './IAppState'

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
    constructor (ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
        ngRedux.configureStore(
            <Reducer<IAppState>>rootReducer,
            INITIAL_STATE
        )
    }
}
