//this is where all your state data is stored
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

export default store