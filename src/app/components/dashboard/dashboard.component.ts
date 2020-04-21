import { Component, OnInit } from '@angular/core';
import { IoTAgentServiceService } from '../services/iot-agent-service.service';
import { ContextBrokerService } from '../services/context-broker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [IoTAgentServiceService, ContextBrokerService],
})
export class DashboardComponent implements OnInit {

  constructor(private iotAgent: IoTAgentServiceService, private context: ContextBrokerService) { }
  iotAgentStatus: IotAgentStatus;
  iotAgentServiceGroup: IotAgentServiceGroup[];
  contextStatus : ContextStatus;
  cygnusStatus: CygnusStatus;
  cometStatus : any;

  ngOnInit(): void {
    this.iotAgent.getIotAgentStatus().then((res) => {
      this.iotAgentStatus = <IotAgentStatus>res;
    });
    this.iotAgent.getIotAgentSevice().then((res) => {
      this.iotAgentServiceGroup = <IotAgentServiceGroup[]>res['services'];
    });
    this.context.status().then((res) => {
      this.contextStatus = <ContextStatus>res['orion'];
    })
    this.context.getCygnusStatus().then((res) => {
      this.cygnusStatus = <CygnusStatus>res;
    })
    this.context.getCometStatus().then((res) => {
      this.cometStatus = res['version'];
    });
  }

  createService() {
    let payload = {
      "services": [
        {
          "apikey": "4jggokgpepnvsb2uv4s40d59ov",
          "cbroker": "http://orion:1026",
          "entity_type": "Thing",
          "resource": "/iot/json"
        }
      ]
    };
    this.iotAgent.addIotAgentService(payload).then((res) => {
      alert('service created');
      this.ngOnInit();
    })

  }
}

export interface IotAgentStatus {
  libVersion: string,
  port: string,
  baseRoot: string,
  version: string
}

export interface CygnusStatus {
  success: string,
  version: string
}

export interface IotAgentServiceGroup {
  _id: string,
  resource: string,
  apikey: string,
  service: string,
  subservice: string,
  static_attributes: [],
  internal_attributes: [],
  entity_type: string
}

export interface ContextStatus {
  version: string,
  uptime: string,
  git_hash: string,
  compile_time: string,
  compiled_by: string,
  compiled_in: string,
  release_date: string,
  doc: string
}
