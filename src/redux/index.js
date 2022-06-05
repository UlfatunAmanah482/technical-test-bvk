import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { catsReducer } from './reducers/cats'



const rootReducers = combineReducers({
  cats: catsReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))