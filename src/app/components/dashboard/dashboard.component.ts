import { Component, OnInit } from '@angular/core';
import { IoTAgentServiceService } from '../services/iot-agent-service.service';
import { ContextBrokerService } from '../services/context-broker.service';
import { SawtoothRESTService } from '../services/sawtooth-rest.service';
import { TpClientService } from '../services/cattlechain-tp-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [IoTAgentServiceService, ContextBrokerService, SawtoothRESTService, TpClientService],
})
export class DashboardComponent implements OnInit {

  constructor(private iotAgent: IoTAgentServiceService, private context: ContextBrokerService, private sawtoothREST: SawtoothRESTService, private tpClient: TpClientService) { }
  iotAgentStatus: IotAgentStatus;
  iotAgentServiceGroup: IotAgentServiceGroup[];
  contextStatus : ContextStatus;
  cygnusStatus: CygnusStatus;
  quantumLeapStatus : any;
  sawtoothStatus: SawtoothRESTStatus;
  sawtoothExplorerStatus: any;
  count = 0;
  tpClientStatus: any;

  ngOnInit(): void {
    this.iotAgent.getIotAgentStatus().then((res) => {
      this.iotAgentStatus = <IotAgentStatus>res;
    });
    this.iotAgent.getIotAgentSevice().then((res) => {
      this.iotAgentServiceGroup = <IotAgentServiceGroup[]>res['services'];
      this.count = this.iotAgentServiceGroup.length;
    });
    this.context.status().then((res) => {
      this.contextStatus = <ContextStatus>res['orion'];
    })
    this.context.getCygnusStatus().then((res) => {
      this.cygnusStatus = <CygnusStatus>res;
    })
    this.context.getQuantumleapStatus().then((res) => {
      this.quantumLeapStatus = res['version'];
    });
    this.sawtoothREST.getStatus().then((res) => {
      this.sawtoothStatus = <SawtoothRESTStatus>res;
    });
    this.sawtoothREST.getSawtoothExplorerStatus().then((res) => {
      this.sawtoothExplorerStatus = res;
    });
    this.tpClient.getTpStatus().then((res) => {
      this.tpClientStatus = res['success'];
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

export interface SawtoothRESTStatus {
  data: Data;
  link: string;
}

export interface Data {
  endpoint: string;
  peers: any[];
}

