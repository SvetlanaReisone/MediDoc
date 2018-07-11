import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GenericHttpService {

  public apiEndpoint: {} = {
    mediSRV_users: 'http://localhost:3000/api/user',
    mediSRV_personal: 'http://localhost:3000/api/personal',
    mediSRV_images: 'http://localhost:3000/api/images'
  };


  constructor(private _httpClient: HttpClient) { }

  get(api: string, path: string = null): Observable<any> {
    if (!this.apiEndpoint[api]) {
      return of(new Error('API Endpoint do not exist.'));
    }
    console.log('get from URL: ', this.apiEndpoint[api]+path);
    return this._httpClient.get(`${this.apiEndpoint[api]}${(path) ? `${path}` : ``}`).pipe(
      map(res => res || {}),
      catchError((err: Error) => of(new Error(`${err.message || `Unable to request service API.`}`)))
    );
  }

  post(api: string, path: string = null, body: any): Observable<any> {

    if (!this.apiEndpoint[api]) {
      return of(new Error('API Endpoint do not exist.'));
    }
  
    return this._httpClient.post(`${this.apiEndpoint[api]}${path}`, body).pipe(
      map(res => res || {}),
      catchError((err: Error) => of(new Error(`${err.message || `Unable to request service POST API.`}`)))
    );
  }

}
