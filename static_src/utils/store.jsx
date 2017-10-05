import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from './../middlewares';


function initStore(additionalMiddlewares = []) {
    let initialStore = {};
    if ( !SERVER && window.__REDUX__SERVER__STORE__ ){
        initialStore = JSON.parse(window.__REDUX__SERVER__STORE__);
    }
    const enhancerList = [applyMiddleware(...additionalMiddlewares, ...middlewares),];
    if (typeof(window) != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__()){
        enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    }
    const enhancers = compose(
        ...enhancerList
    );
    let store = createStore( initReducers, initialStore, enhancers );
    return store
}

export default initStore;
