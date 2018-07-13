import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Personal} from '../../models/personal';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class GenericHttpService {

  public apiEndpoint: {} = {
    // mediSRV_users: 'http://localhost:3000/api/users',
    // mediSRV_personal: 'http://localhost:3000/api/personal',
    // mediSRV_images: 'http://localhost:3000/api/images',
    // mediSRV_treatment: 'http://localhost:3000/api/treatment'
    
     mediSRV_users:'https://medi-srv.herokuapp.com/api/users',
     mediSRV_personal: 'https://medi-srv.herokuapp.com/api/personal',
     mediSRV_images: 'https://medi-srv.herokuapp.com/api/images',
    mediSRV_treatment: 'https://medi-srv.herokuapp.com/api/treatment'
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
  
    return this._httpClient.post(`${this.apiEndpoint[api]}${path}`, body, httpOptions).pipe(
      map(res => res || {}),
      catchError((err: Error) => of(new Error(`${err.message || `Unable to request service POST API.`}`)))
    );
  }

  updateFields(api: string, path: string = null, body: any): Observable<any> {
    if (!this.apiEndpoint[api]) {
      return of(new Error('API Endpoint do not exist.'));
    }

    return this._httpClient.patch(`${this.apiEndpoint[api]}${path}`, body, httpOptions).pipe(
      map(res => res || {}),
      catchError((err: Error) => of(new Error(`${err.message || `Unable to request service PATCH API.`}`)))
    );

  }

  delete(api: string, path: string = null): Observable<any> {
    if (!this.apiEndpoint[api]) {
      return of(new Error('API Endpoint do not exist.'));
    }

    return this._httpClient.patch(`${this.apiEndpoint[api]}${path}`, httpOptions).pipe(
      map(res => res || {}),
      catchError((err: Error) => of(new Error(`${err.message || `Unable to request service DELETE API.`}`)))
    );

  }

}
