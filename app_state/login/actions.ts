import { Action } from 'redux';

//============================================================================
// - Action keys 
//============================================================================
export enum LoginActionKeys {
    request = "LoginActions.request",
    success = "LoginActions.success",
    failure = "LoginActions.failure"
}

//============================================================================
// - Action interfaces
//============================================================================

export interface RequestLogin extends Action<LoginActionKeys> {
    type: LoginActionKeys.request;
    payload: any;
}

export interface successLogin extends Action<LoginActionKeys> {
    type: LoginActionKeys.success;
    payload: string;
}

export interface failureLogin extends Action<LoginActionKeys> {
    type: LoginActionKeys.failure;
    payload: string;
}

export type LoginActionTypes =  
    | RequestLogin
    | successLogin
    | failureLogin
