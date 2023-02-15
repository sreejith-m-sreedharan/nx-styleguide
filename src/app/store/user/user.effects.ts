import { UserService } from '../../api/user/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCounter, loadCounterSuccess, loadCounterError} from './user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private userService: UserService // we will need this service for API calls
  ) {}

  loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadCounter),
    switchMap(() => (this.userService.getUsers()).pipe(
      map((count) => loadCounterSuccess(<any>count)),
      catchError(() => of(loadCounterError()))
    ))
  )
);
}