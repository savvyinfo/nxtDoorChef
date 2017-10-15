import {EMAIL, NAME, SUBMIT} from '../actions';

const INITIAL = {
    name: '',
    email: '',
    submitted: ''
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case NAME:
            return {...state, name: action.payload};
        case EMAIL:
            return {...state, email: action.payload};
        case SUBMIT:
            return {submitted: action.payload, name: '', email: ''};
        default:
            return state;
    };
};