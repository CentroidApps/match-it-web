export interface GameLevelDetails {
    id?: number;
    gameLevelId: number;
    description: string;
    questionModelType: string;
    questionBucketType: string;
    start: number;
    end: number;
    answerModelType: string;
    answerBucketType: string;
    status: string;
}