import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset,loadCounterSuccess, loadCounterError } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(loadCounterSuccess,(state,{count}) => count),
  on(loadCounterError,(state)=> -1)
);