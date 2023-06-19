import { createActionGroup, props } from "@ngrx/store";
import { Question } from "src/app/models/question.model";

export const quizActions = createActionGroup({
    source: 'Quiz', 
    events: {
        addNewQuestion: props<{question: Question, quizId: string}>()
    }
})