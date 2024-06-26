import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiUrls } from '../config';
import { SystemConstValues } from '../models/system-const-values';
import { CacheService } from './cache.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(
    private http: HttpClient,
    private utilService: UtilService,
    private cacheService: CacheService,
  ) { }

  validateRequest(url: string): Promise<boolean> {
    return lastValueFrom(this.http.get<boolean>(ApiUrls.VALIDATE(url)));
  }

  getSystemConstValues(): Promise<SystemConstValues> {
    let url = ApiUrls.SYSTEM_CONSTANT_VALUES();
    let response = this.cacheService.get(url);
    if (response) {
      return response;
    } else {
      response = lastValueFrom(this.http.get<SystemConstValues>(url));
      this.cacheService.set(url, response);
      return response;
    }
  }

  async downloadDatabase() {
    const response = await lastValueFrom(
      this.http.get(ApiUrls.DOWNLOAD_DATABASE(), {
        responseType: 'blob',
        observe: 'response',
      })
    );
    let cdh = 'content-disposition';
    if (response.headers.has(cdh)) {
      let cdhValue = response.headers.get(cdh);
      if (cdhValue) {
        const cdhResult = cdhValue.split(';')[1].trim().split('=')[1];
        const fileName = cdhResult.replace(/"/g, '');
        this.utilService.saveAsFile(response, fileName);
      }
    } else {
      this.utilService.saveAsFile(response, 'file');
    }
  }
}
