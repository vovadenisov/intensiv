import update from 'react-addons-update';
import { START_TASK_LOADING, SUCCESS_TASK_LOADING, ERROR_TASK_LOADING } from './../actions/tasks';


const initialState = {
    taskList: [],
    tasks: {},
    isLoading: false,
};


export default function tasks(store = initialState, action) {
    let newStore = store;
    if (typeof window != 'undefined' && window.__REDUX__SERVER__STORE__ && !action.payload){
        newStore = JSON.parse(window.__REDUX__SERVER__STORE__).tasks
    }
    if (action.payload && action.payload.entities && action.payload.entities.tasks) {
        console.log('updateTasks');
        newStore = update(store, {
            tasks: { $merge: action.payload.entities.tasks },
        });
    }

    switch (action.type) {
        case START_TASK_LOADING: {
            if (typeof window != 'undefined' && window.__SERVER__RENDERING__ ){
                window.serverRendering = false;
                return newStore
            } else {
                return update(newStore, {
                    isLoading: { $set: true }
                });
            }
        }
        case SUCCESS_TASK_LOADING: {
            return update(newStore, {
                isLoading: { $set: false },
                taskList: { $set: action.payload.result },
            });
        }
        case ERROR_TASK_LOADING: {
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        default:
            return newStore;
    }
}
