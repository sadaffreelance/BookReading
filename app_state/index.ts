/******************************************************************************
 * Copyright (c) Dharma Platform, Inc. All rights reserved.
 ******************************************************************************/

import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import { ajax } from 'rxjs/observable/dom/ajax';
import { AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import { Observable } from 'rxjs';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { loginEpic$ } from './login/epic';
import { LoginReducer, LoginState } from './login/reducer';

//============================================================================
export interface AppState {
    login: LoginState;
}

//============================================================================
export interface DependenciesContainer {
    getJSON<T>(url: string, headers?: Object): Observable<T>;
    post(url: string, body?: any, headers?: Object): Observable<AjaxResponse>;
}

//----------------------------------------------------------------------------
const rootEpic$ = combineEpics(
    loginEpic$
);

//----------------------------------------------------------------------------
const rootReducer = combineReducers<AppState>({
    login: LoginReducer,
});

//----------------------------------------------------------------------------
export const storeFactory = () => {
    const dependencies: DependenciesContainer = {
        getJSON: ajax.getJSON,
        post: ajax.post
    };

    const epicMiddleware =
        createEpicMiddleware<Action<any>, Action<any>, AppState, DependenciesContainer>({ dependencies });
    const store = createStore(rootReducer, {}, applyMiddleware(epicMiddleware));

    epicMiddleware.run(rootEpic$);

    return store;
};
