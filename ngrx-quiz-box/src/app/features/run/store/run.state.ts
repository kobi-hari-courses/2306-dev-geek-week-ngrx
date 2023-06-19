import { Question } from "src/app/models/question.model";

export interface RunState {
    questions: Question[],
    answers: number[],     
}