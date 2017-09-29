import update from 'react-addons-update';
import { } from './../actions/tasks';


const initialState = {
    taskList: [],
    isLoading: false,
};


export default function router(store = initialState, action) {
    switch (action.type) {
        default:
            return store;
    }
}
