import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiUrls } from '../config';
import { GameLevel } from '../models/game-level';
import { GameLevelDetails } from '../models/level-details';

@Injectable({
  providedIn: 'root'
})
export class GameLevelService {

  constructor(
    private http: HttpClient
  ) { }

  getGameLevelList(params: any): Promise<any> {
    return lastValueFrom(this.http.get<any>(ApiUrls.GAME_LEVEL(), { params: params }));
  }

  addGameLevel(payload: GameLevel): Promise<any> {
    return lastValueFrom(this.http.post<any>(ApiUrls.GAME_LEVEL(), payload));
  }

  updateGameLevel(payload: GameLevel): Promise<any> {
    return lastValueFrom(this.http.put<any>(ApiUrls.GAME_LEVEL(), payload));
  }

  deleteGameLevelById(gameLevelId: number): Promise<any> {
    return lastValueFrom(this.http.delete<any>(`${ApiUrls.GAME_LEVEL()}/${gameLevelId}`));
  }

  getGameLevelDropdownList(gameTypeId: number): Promise<any> {
    return lastValueFrom(this.http.get<any>(`${ApiUrls.GAME_LEVEL_DROPDOWN()}/${gameTypeId}`));
  }

  getGameLevelDetailsList(gameLevelId: number): Promise<any> {
    return lastValueFrom(this.http.get<any>(`${ApiUrls.GAME_LEVEL_DETAILS()}?gameLevelId=${gameLevelId}`));
  }

  saveGameLevelDetails(payload: GameLevelDetails[]): Promise<any> {
    return lastValueFrom(this.http.post<any>(ApiUrls.GAME_LEVEL_DETAILS(), payload));
  }

  deleteGameLevelDetailsById(gameLevelDetailsId: number): Promise<any> {
    return lastValueFrom(this.http.delete<any>(`${ApiUrls.GAME_LEVEL_DETAILS()}/${gameLevelDetailsId}`));
  }
} 
