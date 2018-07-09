import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private _storage: Storage
  ) { }

  set(Key:String, value:any){
   console.log('Set storage, ', Key, value);
  }

  get(Key:String){
    console.log('Get from storage, ', Key);
    return "Hello";
   }
}
