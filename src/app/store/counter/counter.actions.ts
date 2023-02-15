import { createAction,props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const loadCounter = createAction('[Counter List] Load Counter');
export const loadCounterSuccess = createAction('[Counter Component] Load Counter Success',props<{count: number}>());
export const loadCounterError = createAction('[Counter List] Load Counter Error');