import { GameType } from "./game-type";

export interface GameLevel {
    id: number;
    gameTypeId: number;
    coinValue: number;
    gameType: GameType;
    gameLevel: string;
    assetImagePath: string;
    status: string;
    sequence: number;
}