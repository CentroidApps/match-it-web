export interface GameLevelDetails {
    id?: number;
    gameLevelId: number;
    description: string;
    questionModelType: string;
    start: number;
    end: number;
    answerModelType: string;
    status: string;
}