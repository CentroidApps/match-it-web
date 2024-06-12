import { GameType } from "./game-type";

export interface GameLevel {
    id: number;
    gameTypeId: number;
    coinValue: number;
    gameType: GameType;
    gameLevel: string;
    description: string;
    bgColor: string;
    status: string;
    sequence: number;
}