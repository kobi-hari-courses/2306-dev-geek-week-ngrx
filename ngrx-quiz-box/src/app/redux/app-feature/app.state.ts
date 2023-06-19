import { Quiz } from "src/app/models/quiz.model";
import { SAMPLE_QUIZES } from "src/app/sample_data/quizes";

export interface AppState {
    readonly quizes: Quiz[];
}

export const INITIAL_APP_STATE: AppState = {
    quizes: [...SAMPLE_QUIZES, {
        id: 'blablabla', 
        caption: 'Sports Quiz', 
        imageUrl: 'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png', 
        questions: [
            {
                caption: 'Who is the champion in the Israeli soccer League',
                answers: ['Maccabi Tel Aviv', 'Hapoel Tel Aviv', 'Maccabi Haifa', 'Hapoel Beer Shava'], 
                correctAnswer: 2
            }
        ]
    }], 
}