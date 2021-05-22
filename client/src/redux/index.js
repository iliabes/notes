import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './redusers/combineRedusers'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

//  const store = createStore(combineReducers, applyMiddleware(thunk))
export const store = createStore(combineReducers, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));