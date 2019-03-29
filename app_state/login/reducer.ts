import { LoginActionTypes, LoginActionKeys } from './actions';

export interface LoginState {
    status: false ;
}

const defaultState: LoginState = {
    status: false,
};

export const LoginReducer = (state: LoginState = defaultState, action: LoginActionTypes): LoginActionKeys => {
    switch (action.type) {
        case LoginActionKeys.request:
            return {
                ...state,
                status: false, 
            }
        default:
            return state;
    }
};
