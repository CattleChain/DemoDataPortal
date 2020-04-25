import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SawtoothRESTService {
  private sawtoothREST;
  private httpOptions;

  constructor(private http: HttpClient) {
    this.sawtoothREST = environment.sawtoothREST;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getStatus() {
    return new Promise((resolve, reject) => {
      this.http.get(this.sawtoothREST + '/status').subscribe(response => {
        resolve(response)
      }, error => reject(error));
    }) 
  }

  getSawtoothExplorerStatus() {
    return new Promise((resolve, reject) => {
        this.http.get(environment.sawtoothExplorer).subscribe((response: Response) => {
            if(response.status === 200){
                resolve('true')
            }else {
                reject();
            }
        }, (error: Response) => { 
            if(error.status === 200){
                resolve('true')
            }else {
                reject();
            }
        });
      }) 
  }
}

