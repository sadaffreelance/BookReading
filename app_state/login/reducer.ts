import { LoginActionTypes, LoginActionKeys } from './actions';

export interface LoginState {
    payload: any;
    isRequesting: boolean ;
    message: string;
    error: string;
}

const defaultState: LoginState = {
    payload: {},
    isRequesting: false,
    message: '',
    error: ''
};

export const LoginReducer = (state: LoginState = defaultState, action: LoginActionTypes): LoginState => {
    switch (action.type) {
        case LoginActionKeys.request:
            return {
                ...state,
                payload: action.payload,
                isRequesting: true, 
            }
        case LoginActionKeys.success:
            return {
                ...state,
                message: action.payload,
                isRequesting: false,
            }
        case LoginActionKeys.failure:
            return {
                ...state,
                error: action.payload,
                isRequesting: false,
            }
        default:
            return state;
    }
};
