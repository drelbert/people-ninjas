import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ninja, ProjectDetails } from './ninja';



@Injectable({
  providedIn: 'root'
})
export class NinjaDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

    //Method to get count of Ninjas in collection.


    //Method that uses the HttpClient to return an array of ninjas.
    public getNinjas(): Promise<Ninja[]> {
      const url: string = `${this.apiBaseUrl}/ninjas`;
      return this.http
      .get(url)
      .toPromise()
      .then(response => response as Ninja[])
      .catch(this.handleError);
    }
    
    //Method to get ninja details 
    public getNinjaById(ninjaId: string): Promise<Ninja> { 
      const url: string = `${this.apiBaseUrl}/ninjas/${ninjaId}`;
      return this.http
      .get(url)
      .toPromise()
      .then(response => response as Ninja)
      .catch(this.handleError);
    }

    //Method to post new project
    public addProjectByNinjaId(ninjaId: string, formData: ProjectDetails): Promise<ProjectDetails> {
      const url: string = `${this.apiBaseUrl}/ninjas/${ninjaId}/projectDetails`;
      return this.http  
        .post(url, formData)
        .toPromise()
        .then(response => response as ProjectDetails)
        .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
      console.error('Well, this is embarassing, something is wrong', error);
      return Promise.reject(error.message || error);
    }
 }