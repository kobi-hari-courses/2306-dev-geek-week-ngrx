import { createReducer } from "@ngrx/store";
import { INITIAL_APP_STATE } from "./app.state";

export const appReducer = createReducer(INITIAL_APP_STATE);