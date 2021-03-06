import { createStore } from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''
}

function reducer(state = initialState, action){
    const {type, payload} = action;
    switch (type){
        default:
            return state;
    }
}

export default createStore(reducer);