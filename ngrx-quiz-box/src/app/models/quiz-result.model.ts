import { Question } from "./question.model";
import { Quiz } from "./quiz.model";

export interface QuizResult {
    readonly uid: string;
    readonly userName: string;
    readonly quiz: Quiz;
    readonly answers: number[];
}