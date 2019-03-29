import { Action } from 'redux';

//============================================================================
// - Action keys 
//============================================================================
export enum LoginActionKeys {
    request = 'LoginActions.request',
    
}

//============================================================================
// - Action interfaces
//============================================================================

export interface RequestLogin extends Action<LoginActionKeys> {
    type: LoginActionKeys.request;
    data: any;
    response: any;
}

export type LoginActionTypes =  
    | RequestLogin
    
