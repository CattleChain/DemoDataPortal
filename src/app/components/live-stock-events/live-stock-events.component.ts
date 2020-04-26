import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, SingleDataSet } from 'ng2-charts';
import { ContextBrokerService } from '../services/context-broker.service';
import { interval } from 'rxjs';
import { DatePipe } from '@angular/common';

export interface proofs {
  batchId: string;
  timestamp: string;
  link: string;
}

export interface mlData {
  temprature: string;
  activity: string;
  rest_time: string;
  timestamp: string;
  welfareCondition: string;
}


@Component({
  selector: 'app-live-stock-events',
  templateUrl: './live-stock-events.component.html',
  styleUrls: ['./live-stock-events.component.css']
})
export class LiveStockEventsComponent implements OnInit {
  device;
  show;
  intervalTime;
  deviceData : DeviceData;
  proofSet:proofs[] = [];
  mlStatus:mlData[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  lineChartData: ChartDataSets[] = [{ data: [], label: '' },{ data: [], label: '' },{ data: [], label: '' },{ data: [], label: '' },{ data: [], label: '' },{ data: [], label: '' }];
  lineChartLabels: Label[] = [];
  
  constructor(private context: ContextBrokerService, private datepipe: DatePipe) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.intervalTime = null;
    this.show = false;
    this.intervalTime = interval(5000);
  }

  getData() {
    this.intervalTime.subscribe(() => {
      this.context.getById(this.device).then((res) => {
        this.show = true;
        this.deviceData = <DeviceData>res;
        this.lineChartData[0].data.push(parseInt(this.deviceData.temprature));
        this.lineChartData[0].label = 'temprature';
        this.lineChartData[1].data.push(parseInt(this.deviceData.dairy_time));
        this.lineChartData[1].label = 'dairy_time';
        this.lineChartData[2].data.push(parseInt(this.deviceData.drinkingbehaviour));
        this.lineChartData[2].label = 'drinkingbehaviour';
        this.lineChartData[3].data.push(parseInt(this.deviceData.rest_time));
        this.lineChartData[3].label = 'rest_time';
        this.lineChartData[4].data.push(parseInt(this.deviceData.activity));
        this.lineChartData[4].label = 'activity'
        this.lineChartData[5].data.push(parseInt(this.deviceData.weight));
        this.lineChartData[5].label = 'weight'
        let date = this.datepipe.transform(this.deviceData.TimeInstant, 'yyyy-MM-dd HH:MM:SS');
        this.proofSet.push({batchId: this.deviceData.batchId, timestamp: date, link: 'http://localhost:4100/batches/'+ this.deviceData.batchId});
        if(parseInt(this.deviceData.temprature) > 30 || parseInt(this.deviceData.temprature) <5) {
          this.mlStatus.push({ temprature : this.deviceData.temprature, activity :this.deviceData.activity, rest_time: this.deviceData.rest_time, timestamp: date, welfareCondition: 'Issue' });
        } else {
          this.mlStatus.push({ temprature : this.deviceData.temprature, activity :this.deviceData.activity, rest_time: this.deviceData.rest_time, timestamp: date, welfareCondition: 'Adequate' });
        }
        this.lineChartLabels.push(date.toString());
        console.log('res', JSON.stringify(res));
      });
    });
  }


  



  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // barChartData: ChartDataSets[] = [
  //   { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  // ];



  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  // public pieChartData: SingleDataSet = [30, 50, 20];
  // public pieChartType: ChartType = 'pie';
  // public pieChartLegend = true;
  // public pieChartPlugins = [];


  // public bubbleChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: {
  //     xAxes: [{
  //       ticks: {
  //         min: 0,
  //         max: 50,
  //       }
  //     }],
  //     yAxes: [{
  //       ticks: {
  //         min: 0,
  //         max: 50,
  //       }
  //     }]
  //   }
  // };
  // public bubbleChartType: ChartType = 'bubble';
  // public bubbleChartLegend = true;

  // public bubbleChartData: ChartDataSets[] = [
  //   {
  //     data: [
  //       { x: 15, y: 15, r: 15 },
  //       { x: 25, y: 15, r: 25 },
  //       { x: 36, y: 12, r: 33 },
  //       { x: 10, y: 18, r: 18 },
  //     ],
  //     label: 'Investment Equities',
  //   },
  // ];

  // public radarChartOptions: RadialChartOptions = {
  //   responsive: true,
  // };
  // public radarChartLabels: Label[] = ['Punctuality', 'Communication', 'Problem Solving',
  //   'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'];

  // public radarChartData: ChartDataSets[] = [
  //   { data: [0, 1, 2, 3, 4, 5, 6], label: 'Employee Skill Analysis' }
  // ];
  // public radarChartType: ChartType = 'radar';
}

export interface DeviceData {
  id: string;
  type: string;
  TimeInstant: Date;
  activity: string;
  batchId: string;
  dairy_time: string;
  drinkingbehaviour: string;
  rest_time: string;
  temprature: string;
  weight: string;
}
