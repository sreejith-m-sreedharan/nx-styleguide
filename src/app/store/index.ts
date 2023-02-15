import { counterReducer } from "./counter/counter.reducer";
import { CounterEffects } from "./counter/counter.effects";

export const reducers = {count: counterReducer};
export const effects = [CounterEffects];