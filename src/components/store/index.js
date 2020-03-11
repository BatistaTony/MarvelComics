import {createStore,  compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import allReducers from './reducers'

const store  = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)(
    allReducers
)


export default store
