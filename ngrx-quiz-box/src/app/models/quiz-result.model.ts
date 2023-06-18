import { Question } from "./question.model";

export interface QuizResult {
    readonly uid: string;
    readonly userName: string;
    readonly questions: Question[];
    readonly answers: number[];
}