import { createActionGroup, props } from "@ngrx/store";
import { Question } from "src/app/models/question.model";

export const quizActions = createActionGroup({
    source: 'Quiz', 
    events: {
        'add new question': props<{question: Question, quizId: string}>(), 
        'generate new question': props<{questionType: 'captial' | 'math', quizId: string}>()
    }
})
