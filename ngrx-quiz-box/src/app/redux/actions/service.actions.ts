import { createActionGroup, props } from "@ngrx/store";
import { Question } from "src/app/models/question.model";

export const serviceActions = createActionGroup({
    source: 'Service', 
    events: {
        questionGeneratedSuccessfully: props<{question: Question, quizId: string}>()
    }
})