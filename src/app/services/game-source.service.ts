import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiUrls } from '../config';
import { AppResponse } from '../models/common-interface';
import { GameSource } from '../models/game-source';
import { MediaBucket } from '../models/media-bucket';
import { MediaItem } from '../models/media-item';

@Injectable({
  providedIn: 'root'
})
export class GameSourceService {

  constructor(
    private http: HttpClient
  ) { }

  getGameSourceList(params: any): Promise<AppResponse<GameSource[]>> {
    return lastValueFrom(this.http.get<AppResponse<GameSource[]>>(ApiUrls.GAME_SOURCE(), { params: params }));
  }

  updateGameSource(params: any): Promise<any> {
    return lastValueFrom(this.http.put<any>(ApiUrls.GAME_SOURCE(), params));
  }

  deleteGameSourceById(gameSourceId: number): Promise<any> {
    return lastValueFrom(this.http.delete<any>(ApiUrls.GAME_SOURCE() + '/' + gameSourceId,));
  }

  getGameSourceDetailsById(gameSourceId: number): Promise<any> {
    return lastValueFrom(this.http.get<any>(ApiUrls.GAME_SOURCE() + '/' + gameSourceId,));
  }

  uploadSourceMedia(file: FormData, gameSourceId: number): Promise<MediaItem> {
    return lastValueFrom(this.http.post<any>(ApiUrls.MEDIA_UPLOAD() + '/' + gameSourceId, file, {
      headers: { 'fileUpload': 'true' },
    }));
  }

  deleteMediaById(mediaId: number): Promise<any> {
    return lastValueFrom(this.http.delete<any>(ApiUrls.MEDIA_DELETE() + '/' + mediaId,));
  }

  updateMediaBucket(payload: MediaBucket): Promise<any> {
    return lastValueFrom(this.http.patch<any>(ApiUrls.MEDIA_UPDATE_BUCKET(), payload));
  }

  updateSourceGroup(id: number, value: string): Promise<any> {
    return lastValueFrom(this.http.patch<any>(ApiUrls.UPDATE_GAME_SOURCE_GROUP(), {
      id: id,
      sourceGroup: value,
    }));
  }

  applyNewSequence(id: number, value: string, clearSequence: boolean): Promise<any> {
    return lastValueFrom(this.http.patch<any>(ApiUrls.GAME_SOURCE_APPLY_NEW_SEQUENCE(), {
      gameTypeId: id,
      sourceGroup: value,
      clearSequence: clearSequence,
    }));
  }

}
