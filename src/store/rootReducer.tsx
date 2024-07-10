import { combineReducers } from 'redux'
import { loaderReducer } from './reducers/loader'
import { appSettingReducer } from './reducers/app-setting'
import { socketReducer } from './reducers/socket'

const rootReducer = combineReducers({
  loaderState: loaderReducer,
  appSettingState: appSettingReducer,
  socketState: socketReducer
})
export default rootReducer
