import update from 'react-addons-update';


const initialState = {
    users: {},
};


export default function tasks(store = initialState, action) {
    let newStore = store;
    if (typeof window != 'undefined' && window.__REDUX__SERVER__STORE__ && !action.payload){
        newStore = JSON.parse(window.__REDUX__SERVER__STORE__).users
    }
    if (action.payload && action.payload.entities && action.payload.entities.users) {
        newStore = update(store, {
            users: { $merge: action.payload.entities.users },
        });
    }
    switch (action.type) {
        default:
            return newStore;
    }
}
