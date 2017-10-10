import update from 'react-addons-update';
import { SET_SSR_FLAG } from './../actions/serverFlag';


const initialState = {
    taskList: [],
    tasks: {},
    isLoading: false,
};


export default function SSR(store = initialState, action) {
    let newStore = store;
    if ( typeof SERVER != 'undefined' && SERVER){
        newStore = {
            serverRendering: true,
        }
    }
    switch (action.type) {
        case SET_SSR_FLAG: {
            return update(newStore, {
                serverRendering: { $set: false }
            });
        }
        default:
            return newStore;
    }
}
