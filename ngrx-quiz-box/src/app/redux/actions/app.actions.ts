import { createActionGroup, props } from "@ngrx/store";
import { Quiz } from "src/app/models/quiz.model";
import { AppState } from "../app-feature/app.state";

export const appActions = createActionGroup({
    source: 'App User', 
    events: {
        'add new quiz': props<{quiz: Quiz}>(), 
        'delete quiz': props<{id: string}>(), 
        'reset': props<{state: AppState | null}>()
    }
});

