import { counterReducer } from "./user/user.reducer";
import { UserEffects } from "./user/user.effects";

export const reducers = {count: counterReducer};
export const effects = [UserEffects];