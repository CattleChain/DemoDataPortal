import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContextBrokerService {
  private comet;
  private httpOptions;

  constructor(private http: HttpClient) {
    this.comet = environment.sthComet;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getCometStatus() {
    return new Promise((resolve, reject) => {
      this.http.get(this.comet + '/version').subscribe(response => {
        resolve(response)
      }, error => reject(error));
    }) 
  }
}

