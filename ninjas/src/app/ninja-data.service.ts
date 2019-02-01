import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ninja } from './the-ninjas/the-ninjas.component';



@Injectable({
  providedIn: 'root'
})
export class NinjaDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

    //Method that uses the HttpClient to return an array of ninjas.
    public getNinjas(): Promise<Ninja[]> {
      const url: string = `${this.apiBaseUrl}/ninjas`;
      return this.http
      .get(url)
      .toPromise()
      .then(response => response as Ninja[])
      .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('Well, this is embarassing, something is wrong', error);
      return Promise.reject(error.message || error);
    }
 }