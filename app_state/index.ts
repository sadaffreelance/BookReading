/******************************************************************************
 * Copyright (c) Dharma Platform, Inc. All rights reserved.
 ******************************************************************************/

import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { loginEpic$ } from './login/epic';
import { LoginReducer, LoginState } from './login/reducer';

//============================================================================
export interface AppState {
    login: LoginState;
}

//============================================================================
export interface DependenciesContainer {

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
        //todo add dependencies here (e.g. navigation)
    };

    const epicMiddleware =
        createEpicMiddleware<Action<any>, Action<any>, AppState, DependenciesContainer>({ dependencies });
    const store = createStore(rootReducer, {}, applyMiddleware(epicMiddleware));

    epicMiddleware.run(rootEpic$);

    return store;
};
