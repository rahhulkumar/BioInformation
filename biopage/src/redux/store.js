import {legacy_createStore as createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)      //creating store passing reducer function

export default store