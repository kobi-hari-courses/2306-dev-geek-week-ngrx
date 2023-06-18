export interface ResultViewModel {
    readonly caption: string;
    readonly user: string;
    readonly correct: number;
    readonly wrong: number;
    readonly imageUrl?: string;

}