import { Action } from '@ngrx/store'
import { IAppState, initialState } from './model'

export function appReducer (state: IAppState = initialState, action: Action) {
    switch (action.type) {
        default :
            return state
    }
}
