export interface GameLevelDetails {
    id?: number;
    gameLevelId: number;
    description: string;
    questionModelType: string;
    questionBucketType: string;
    start?: number | null;
    end?: number | null;
    answerModelType: string;
    answerBucketType: string;
    sourceGroup: string;
    status: string;
}