import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiUrls } from '../config';
import { SystemConstValues } from '../models/system-const-values';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(
    private http: HttpClient
  ) { }

  getSystemConstValues(): Promise<SystemConstValues> {
    return lastValueFrom(this.http.get<SystemConstValues>(ApiUrls.SYSTEM_CONSTANT_VALUES()));
  }
}
