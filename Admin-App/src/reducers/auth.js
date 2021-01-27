import { authConstants } from '../actions/constants';

const initialState = {
    name: 'Nir'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            } 
            break;
    }

    return state;
}