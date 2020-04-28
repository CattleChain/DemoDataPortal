import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TpClientService {
  private tpClient;
  private httpOptions;

  constructor(private http: HttpClient) {
    this.tpClient = environment.tpClient;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getTpStatus() {
    return new Promise((resolve, reject) => {
      this.http.get(this.tpClient + '/status').subscribe(response => {
        resolve(response)
      }, error => reject(error));
    }) 
  }

  createAccount(legalId) {
    let body = {
      "legalId" : legalId
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.tpClient + '/account', body, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    }) 
  }

  createAnimalIdentity(body) {
    return new Promise((resolve, reject) => {
      this.http.post(this.tpClient + '/create', body, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    }) 
  }

  addAnimalEvents(body) {
    return new Promise((resolve, reject) => {
      this.http.post(this.tpClient + '/add', body, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    }) 
  }
}

