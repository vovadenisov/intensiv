import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from './../middlewares';


function initStore(additionalMiddlewares = []) {
    const initialStore = {};
    const enhancerList = [applyMiddleware(...additionalMiddlewares, ...middlewares),];
    if (typeof(window) != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__()){
        enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    }
    const enhancers = compose(
        ...enhancerList
    )
    return createStore( initReducers, initialStore, enhancers );
}

export default initStore;
