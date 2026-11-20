import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Promise<Storage>;

  constructor(private storage: Storage) {
    this._storage = this.storage.create();
  }

  public async set(key: string, value: any) {
    const storage = await this._storage;
    await storage.set(key, value);
  }

  public async get(key: string) {
    const storage = await this._storage;
    let val = await storage.get(key);
    return val;
  }

  public async reset() {
    const storage = await this._storage;
    storage.clear();
  }
}