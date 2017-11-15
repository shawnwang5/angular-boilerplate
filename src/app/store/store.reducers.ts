import { Action, combineReducers, Reducer } from 'redux'
import { INITIAL_COMMONS_STATE } from './initial-commons-state'
import { ICommons } from './models'

function commonReducer (state: ICommons = INITIAL_COMMONS_STATE, action: Action): ICommons {
    return state
}

export const rootReducer: Reducer<any> = combineReducers({
    commons: commonReducer
})
