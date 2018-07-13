import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private _storage: Storage
  ) { }

  set(Key:string, value:any){
     this._storage.set(Key,value);
  }

  get(Key:string):any {
    console.log('Get from storage, ', Key);
    return this._storage.get(Key)
   }
}
