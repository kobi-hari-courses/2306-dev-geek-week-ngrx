import { createReducer, on } from "@ngrx/store";
import { INITIAL_APP_STATE } from "./app.state";
import { appActions } from "../actions/app.actions";
import { quizActions } from "../actions/quiz.actions";
import { replaceItem } from "./app.helpers";

export const appReducer = createReducer(INITIAL_APP_STATE, 
    on(appActions.addNewQuiz, (state, action) => ({
        ...state, 
        quizes: [...state.quizes, action.quiz]
    })), 
    on(quizActions.addNewQuestion, (state, action) => ({
        ...state, 
        quizes: replaceItem(state.quizes, q => q.id === action.quizId, q => ({
            ...q, 
            questions: [...q.questions, action.question]
        }))
    })), 
    on(appActions.reset, (state, action) => action.state ?? state)
    
    );