import { createStore, combineReducers, applyMiddleware, compose } from 'redux';


export const logger1 = store => next => (action) => {
    console.log('logger 1', action);
    if (action.type === 'test') {
        return;
    }
    // store.dispatch();
    // const result = next(action);
    // return result;
};

export const logger2 = store => next => (action) => {
    console.log('logger 2', action);
    const result = next(action);
    return result;
};


const tasksReducer = (store = { taskList: [] }, action) => {
    switch (action.type) {
        case "CREATE_TASK":
            return { taskList: [action.payload, ...store.taskList] };
        default:
            return store;
    }
};

const usersReducer = (store = { userList: [] }, action) => {
    return store;
};

const reducer = combineReducers({
    tasks: tasksReducer,
    users: usersReducer,
});

const initialStore = { };

const middlewares = applyMiddleware();

const store = createStore(reducer, initialStore, compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__()));


store.subscribe(
    () => {
        console.log("subscriber 1", store.getState());
    }
);

store.subscribe(
    () => {
        console.log("subscriber 2", store.getState());
    },
);

store.dispatch({
    type: "CREATE_TASK",
    payload: "New task",
});
store.dispatch({
    type: "CREATE_TASK",
    payload: "New task",
});
