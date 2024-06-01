import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiUrls } from '../config';
import { GameType } from '../models/game-type';

@Injectable({
  providedIn: 'root'
})
export class GameTypeService {

  constructor(
    private http: HttpClient
  ) { }

  getGameTypeList(params: any): Promise<any> {
    return lastValueFrom(this.http.get<any>(ApiUrls.GAME_TYPE(), { params: params }));
  }

  getGameTypeDropdownList(): Promise<any> {
    return lastValueFrom(this.http.get<any>(ApiUrls.GAME_TYPE_DROPDOWN()));
  }

  addGameType(payload: GameType): Promise<any> {
    return lastValueFrom(this.http.post<any>(ApiUrls.GAME_TYPE(), payload));
  }

  updateGameType(payload: GameType): Promise<any> {
    return lastValueFrom(this.http.put<any>(ApiUrls.GAME_TYPE(), payload));
  }

  deleteGameTypeById(gameTypeId: number): Promise<any> {
    return lastValueFrom(this.http.delete<any>(`${ApiUrls.GAME_TYPE()}/${gameTypeId}`));
  }
}
