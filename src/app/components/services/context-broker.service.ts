import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContextBrokerService {
  private Endpoint = '';
  private cygnus = '';
  private comet;
  private httpOptions;

  constructor(private http: HttpClient) {
    this.Endpoint = environment.ContextBroker;
    this.cygnus = environment.cygus;
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

  getCygnusStatus() {
    return new Promise((resolve, reject) => {
      this.http.get(this.cygnus + '/v1/version').subscribe(response => {
        resolve(response)
      }, error => reject(error));
    }) 
  }

  status() {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/version').subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  create(payload) {
    return new Promise((resolve, reject) => {
      this.http.post(this.Endpoint + '/v2/entities', payload, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/entities').subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/entities/' + id + '?options-keyValues').subscribe(response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    })
  }

  query(q) {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/entities/' + q ).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  update(id, payload) {
    return new Promise((resolve, reject) => {
      this.http.put(this.Endpoint + '/v2/entities/' + id, payload, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  deleteById(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.Endpoint + '/v2/entities/' + id, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  createSubscription(payload) {
    return new Promise((resolve, reject) => {
      this.http.post(this.Endpoint + '/v2/subscriptions', payload, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getAllSubscription() {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/subscriptions' ).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getSubscriptionById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/subscriptions/' + id).subscribe(response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    })
  }

  updateSuscription(id, payload) {
    return new Promise((resolve, reject) => {
      this.http.put(this.Endpoint + '/v2/subscriptions/' + id, payload, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  deleteSubscriptionById(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.Endpoint + '/v2/subscriptions/' + id).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }
}
