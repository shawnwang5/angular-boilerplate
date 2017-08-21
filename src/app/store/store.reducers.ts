import { Action } from 'redux'
import { IAppState } from './IAppState'

export const INITIAL_STATE: IAppState = {
    name: 'angular4-seed'
}

export function rootReducer (previousState: IAppState, action: Action): IAppState {
    return previousState
}
