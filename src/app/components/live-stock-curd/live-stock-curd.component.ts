import { Component, OnInit, ViewChild } from '@angular/core';
import { IoTAgentServiceService } from '../services/iot-agent-service.service';
import * as uuid from 'uuid';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { DeviceModel, Device } from 'src/app/models/deviceModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IotDataGenerator } from '../services/iot-data-generator';


@Component({
  selector: 'app-live-stock-curd',
  templateUrl: './live-stock-curd.component.html',
  styleUrls: ['./live-stock-curd.component.css'],
  providers: [IoTAgentServiceService],
})

export class LiveStockCURDComponent implements OnInit {
  createDevice;
  attributes = new FormArray([]);
  static_attributes = new FormArray([]);
  public id;
  devices: DeviceModel;
  isShow:boolean = false;
  device: Device;
  displayedColumns: string[] = ['device_id', 'entity_type', 'entity_name', 'transport', 'protocol'];
  dataSource;
  public entity_name;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private iotAgentService: IoTAgentServiceService, private formBuilder: FormBuilder, ) {
    this.createDevice = this.formBuilder.group({
      device_id: new FormControl(),
      protocol: [null, Validators.required],
      entity_type: [null, Validators.required],
      entity_name: [null, Validators.required],
    });
  }

  attachGenerator(device_id, atts) {
    console.log('attachGenerator', device_id);
    const iotDeviceGen = new IotDataGenerator(this.iotAgentService, device_id, atts);
    iotDeviceGen.initialize();
  }

  addAttribute() {
    const attr = new FormGroup({
        object_id: new FormControl(''),
        name: new FormControl(''),
        type: new FormControl('')
    });
    this.attributes.push(attr);
  }

  openDialog(element) {
    this.isShow = true;
    this.device = element;
  }

  addStaticAttribute() {
    const attr = new FormGroup({
        name: new FormControl(''),
        type: new FormControl(''),
        value: new FormControl('')
    });
    this.static_attributes.push(attr);
  }

  ngOnInit(): void {
    this.id = '';
    this.iotAgentService.getAllDevice().then((res) => {
      console.log(res);
      this.devices = <DeviceModel>res;
      this.dataSource = new MatTableDataSource<Device>(this.devices.devices);
    }).catch((error) => {
      alert('Error is fetching devices' + JSON.stringify(error));
    })
    this.dataSource.paginator = this.paginator;
  }

  generateUUID() {
    var id = uuid.v4();
    this.entity_name = 'urn:ngsi-ld:Device:'+ id;
    this.id =  id;
  }

  onCreate() {
    console.log('this.attributes', JSON.stringify(this.attributes.value));
    if (this.createDevice.invalid) {
      return;
    }
    let body = {
      devices: [
        {
          device_id: this.createDevice.value.device_id,
          protocol: this.createDevice.value.protocol,
          entity_name: this.createDevice.value.entity_name,
          entity_type: this.createDevice.value.entity_type,
          attributes: this.attributes.value,
          timezone: "Europe/Berlin",
          static_attributes: this.static_attributes.value
        }
      ]
    }
    this.iotAgentService.createDevice(body).then((device) => {
      alert('new device added' + JSON.stringify(device));
      this.ngOnInit();
    }).catch((error) => {
      alert('Error : ' + JSON.stringify(error));
    })
  }
}