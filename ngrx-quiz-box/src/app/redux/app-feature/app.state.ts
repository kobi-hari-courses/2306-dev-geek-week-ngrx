import { Quiz } from "src/app/models/quiz.model";
import { SAMPLE_QUIZES } from "src/app/sample_data/quizes";

export interface AppState {
    readonly quizes: Quiz[];
}

export const INITIAL_APP_STATE: AppState = {
    quizes: [], 

}