import { Question } from "./question.model";

export interface Quiz {
    readonly id: string;
    readonly caption: string;
    readonly questions: Question[];
    readonly imageUrl?: string;
}