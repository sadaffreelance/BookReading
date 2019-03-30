import { ActionsObservable, StateObservable } from 'redux-observable';
import { of } from 'rxjs';
import { 
    LoginActionKeys,
} from '../login/actions';
import { 
    loginEpic$,
} from '../login/epic';

describe('Login Epic Test', () => {
    test('Request Login', (done)=> {
        const mockResponse = { name: 'Bilbo Baggins' };
        const action$ = ActionsObservable.of({ type: LoginActionKeys.request, payload: "response" });
        const state$ = {}; // not needed for this epic
        const dependencies = {
            post: url => of(mockResponse),
        };
        loginEpic$(action$, state$, dependencies)
        .subscribe(actions => {
            expect(actions).toEqual({
                type: LoginActionKeys.success,
                payload: mockResponse 
            });
            done();
        });
    });

});