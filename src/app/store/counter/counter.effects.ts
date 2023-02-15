import { CounterService } from '../../api/counter/counter.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCounter, loadCounterSuccess, loadCounterError} from './counter.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private counterService: CounterService // we will need this service for API calls
  ) {}

  loadCounter$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadCounter),
    switchMap(() => (this.counterService.getCounter()).pipe(
      map((count) => loadCounterSuccess(<any>count)),
      catchError(() => of(loadCounterError()))
    ))
  )
);
}