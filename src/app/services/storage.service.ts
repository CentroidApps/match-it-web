import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { StorageConst } from 'src/app/config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storageApi = window.localStorage // sessionStorage;

  constructor() { }

  getItem(key: string): any {
    if (environment.production) {
      let item = this.storageApi.getItem(key);
      return item ? JSON.parse(this.decode(item)) : null;
    } else {
      let item = this.storageApi.getItem(key);
      return item ? JSON.parse(item) : null
    }
  }

  setItem(key: string, value: any) {
    if (environment.production) {
      this.storageApi[key] = this.encode(JSON.stringify(value));
    } else {
      this.storageApi[key] = JSON.stringify(value);
    }
  }

  removeItem(key: string) {
    this.storageApi.removeItem(key);
  }

  getSrvUrl(): string | null {
    return this.getItem(StorageConst.SRV_URL);
  }

  setSrvUrl(srvUrl: string) {
    this.setItem(StorageConst.SRV_URL, srvUrl);
  }

  clearLocalStorage() {
    this.storageApi.removeItem(StorageConst.SRV_URL);
  }

  encode(value: any) {
    return Buffer.from(value).toString('base64');
  }

  decode(value: any) {
    return Buffer.from(value, 'base64').toString('utf8');
  }
}
