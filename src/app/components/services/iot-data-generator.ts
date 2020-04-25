
import { interval, Observable } from 'rxjs'; 
import { IoTAgentServiceService } from './iot-agent-service.service';
import { TpClientService } from './cattlechain-tp-client.service';

export class IotDataGenerator {
  private intervalTime = interval(10000);
  deviceId;
  legalId;
  attributes:[];

  constructor(private iotAgent: IoTAgentServiceService, private tpClient: TpClientService, deviceId: string, legalId: string,  attributes:[]) {
    this.deviceId = deviceId;
    this.legalId = legalId;
    this.attributes = attributes;
  }

  initialize() {
      console.log('device id is ', this.deviceId);
      console.log('it is legalId', this.legalId);
      this.intervalTime.subscribe(() => {
          this.addData();
          console.log('it is working', this.deviceId);
          
        });
      return this.deviceId;
  }
  
  addData() {
      let payload:any = {};
      let payload_blockchain:any = {};
      this.attributes.forEach(attribute => {
          if(attribute["type"] == "integer" || attribute["type"] == "Integer") {
            let random = this.getRandomInt(1, 40).toString();
            payload[attribute["object_id"]] = random;
            payload_blockchain[attribute["name"]] =random;
          }
      })
      payload_blockchain["legalId"] = this.legalId;
      this.tpClient.addAnimalEvents(payload_blockchain).then((res) => {
        payload['batchId'] = res['success']['link'].toString().replace('http://rest-api:8008/batch_statuses?id=', '');
        return this.iotAgent.addEvent(this.deviceId, payload);
      }).then((res) => {
          console.log('event added', res);
      }).catch((err) => {
          console.log('error', err);
      })
  }

getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
