import Config from 'react-native-config'
import { Action } from 'redux';
import {  
    mergeMap,
    map, 
    catchError, 
} from 'rxjs/operators';
import { of } from 'rxjs';
import { ActionsObservable, StateObservable, ofType } from 'redux-observable';
import { AppState, DependenciesContainer } from '../index';
import { 
    LoginActionKeys,
    RequestLogin,
} from './actions';

//============================================================================
// - Epics
//============================================================================
export const loginEpic$ = (action$: ActionsObservable<Action<any>>,
                                            state$: StateObservable<AppState>,
                                            { post }: DependenciesContainer) => 
    action$.pipe(
        ofType(LoginActionKeys.request),
        map((action) => action as RequestLogin),
        mergeMap((action) => 
            post(`${Config.API_URL}/login`, action.payload).pipe(
                map((response) => ({ type: LoginActionKeys.success, payload: response })),
                catchError((error) => of({ type: LoginActionKeys.failure, payload: error }))
            )
        ),
    );
