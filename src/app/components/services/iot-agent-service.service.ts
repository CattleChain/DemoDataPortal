import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class IoTAgentServiceService {
  private Endpoint = '';
  private agentEndpoint = '';
  private httpOptions;

  constructor(private http: HttpClient) {
    this.Endpoint = environment.IOTAgentJSON;
    this.agentEndpoint = environment.IOTAgentProvison;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Fiware-Service': 'cattlechain',
        'Fiware-ServicePath': '/CattleChainService'
      })
    };
  }

  getIotAgentStatus() {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/about').subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getIotAgentSevice() {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/services', this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  addIotAgentService(payload) {
    return new Promise((resolve, reject) => {
      this.http.post(this.Endpoint + '/services', payload, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  createDevice(payload) {
    return new Promise((resolve, reject) => {
      this.http.post(this.Endpoint + '/devices', payload, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getAllDevice() {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/devices', this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  getAllById(deviceId) {
    return new Promise((resolve, reject) => {
      this.http.get(this.Endpoint + '/devices/' + deviceId, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  updateDevice(deviceId, payload) {
    return new Promise((resolve, reject) => {
      this.http.put(this.Endpoint + '/devices/' + deviceId, payload, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  deleteById(deviceId) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.Endpoint + '/devices/' + deviceId, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }

  addEvent(deviceId, payload) {
    return new Promise((resolve, reject) => {
      this.http.post(this.agentEndpoint + '/json?k=4jggokgpepnvsb2uv4s40d59ov&i='+ deviceId, payload, this.httpOptions).subscribe(response => {
        resolve(response)
      }, error => reject(error));
    })
  }
}
