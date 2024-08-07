import { GameType } from "./game-type";
import { MediaItem } from "./media-item";

export interface GameSource {
    id: number;
    tts: string;
    spelling: string;
    text1: string;
    text2: string;
    status: string;
    sourceGroup: string;
    gameTypeId: number;
    sequence: number;
    gameType: GameType;
    mediaItems: Array<MediaItem>;
    createdAt: Date;
    updatedAt: Date;
}