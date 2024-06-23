import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  inMemoryCacheMap = new Map<string, any>();

  constructor() { }

  get(key: string) {
    return this.inMemoryCacheMap.get(this.encode(key));
  }

  set(key: string, value: any) {
    this.inMemoryCacheMap.set(this.encode(key), value);
  }

  private encode(value: any) {
    return window.btoa(value);
  }

  private decode(value: any) {
    return window.atob(value);
  }

  clear() {
    this.inMemoryCacheMap.clear();
  }

}
