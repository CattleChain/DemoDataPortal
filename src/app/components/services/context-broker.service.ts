import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContextBrokerService {
  private Endpoint = '';
  private cygnus = '';
  private quantumleap;
  private httpOptions;

  constructor(private http: HttpClient) {
    this.Endpoint = environment.ContextBroker;
    this.cygnus = environment.cygus;
    this.quantumleap = environment.quantumleap;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'fiware-service': 'cattlechain',
        'fiware-servicepath': '/CattleChainService'
      })
    };
  }

  getQuantumleapStatus() {
    return new Promise((resolve, reject) => {
      this.http.get(this.quantumleap + '/version').subscribe(response => {
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
      this.http.get(this.Endpoint + '/v2/entities',this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getById(id) {
    let header = {
      headers: new HttpHeaders({
        'fiware-service': 'cattlechain',
        'fiware-servicepath': '/CattleChainService'
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/entities/' + id + '?options=keyValues', header).subscribe(response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    })
  }

  query(q) {
    let header = {
      headers: new HttpHeaders({
        'fiware-service': 'cattlechain',
        'fiware-servicepath': '/CattleChainService'
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/entities/' + q, header ).subscribe(response => {
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
    let header = {
      headers: new HttpHeaders({
        'fiware-service': 'cattlechain',
        'fiware-servicepath': '/CattleChainService'
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/subscriptions/', header ).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getSubscriptionById(id) {
    let header = {
      headers: new HttpHeaders({
        'fiware-service': 'cattlechain',
        'fiware-servicepath': '/CattleChainService'
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/v2/subscriptions/' + id, header).subscribe(response => {
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
      this.http.delete(this.Endpoint + '/v2/subscriptions/' + id, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }
}

