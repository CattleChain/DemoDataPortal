
import { interval } from 'rxjs'; 
import { IoTAgentServiceService } from './iot-agent-service.service';

export class IotDataGenerator {
  private intervalTime = interval(10000);
  deviceId;
  attributes:[];

  constructor(private iotAgent: IoTAgentServiceService, deviceId: string, attributes:[]) {
    this.deviceId = deviceId;
    this.attributes = attributes;
  }

  initialize() {
      console.log('device id is ', this.deviceId);
      this.intervalTime.subscribe(() => {
          this.addData();
          console.log('it is working', this.deviceId);
        });
      return this.deviceId;
  }
  
  addData() {
      let payload:any = {};
      this.attributes.forEach(attribute => {
          if(attribute["type"] == "Integer") {
            payload[attribute["object_id"]] = this.getRandomInt(1, 40).toString();
          }
      })
      this.iotAgent.addEvent(this.deviceId, payload).then((res) => {
          console.log('event added');
      }).catch((err) => {
          console.log('error');
      })
  }

getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
