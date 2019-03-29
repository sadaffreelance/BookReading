import { Action } from 'redux';
import { ActionsObservable, StateObservable, ofType } from 'redux-observable';
import {  
    map, 
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppState, DependenciesContainer } from '../index';
import { 
    LoginActionKeys,
    RequestLogin
} from './actions';


//============================================================================
// - Observables
//============================================================================

const requestObservable = (): Observable<Status> => {
    return new Observable(observer => {
        Permissions.request()
            .then((status: Status) => {
                observer.next(status);
            })
            .catch((error: Error) => {
                observer.error(error);
            });
    });
}

//============================================================================
// - Epics
//============================================================================
export const loginEpic$ = (action$: ActionsObservable<Action<any>>,
                                state$: StateObservable<AppState>,
                                deps: DependenciesContainer) => 
    action$.pipe(
        // attempt to fetch location after we have successfully gotten location permission
        ofType(
            LoginActionKeys.request,
        ),
        map((action) => action as RequestLogin),
        // The filter below should not be necessary, but it is an extra safeguard
        // in case this action is dispatched with a different permissionStatus
    );
