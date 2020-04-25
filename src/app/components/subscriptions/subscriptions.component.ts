import { Component, OnInit, ViewChild, forwardRef, Inject } from '@angular/core';
import { ContextBrokerService } from '../services/context-broker.service';
import * as uuid from 'uuid';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { SubscriptionModel } from 'src/app/models/subscriptionModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'status', 'notification', 'entity_pattern', 'condition'];
  dataSource:any;
  createSubscription;
  subscriptions: any;
  entities = new FormArray([]);


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  constructor(private contextService: ContextBrokerService, private formBuilder: FormBuilder,) {
    this.createSubscription = this.formBuilder.group({
      description: [null, Validators.required],
      url: [null, Validators.required],
      entities: '',
    });
  }

  addEntity() {
    const attr = new FormGroup({
      idPattern: new FormControl('')
  });
  this.entities.push(attr);
  }


  ngOnInit(): void {
    this.contextService.getAllSubscription().then((res) => {
      this.subscriptions = <SubscriptionModel[]>res;
      this.dataSource = new MatTableDataSource<SubscriptionModel>(this.subscriptions);
      this.dataSource.paginator = this.paginator;
    }).catch((error) => {
      alert('Error is fetching devices' + JSON.stringify(error));
    })
  }

  onCreate() {
   let payload = {
    description: this.createSubscription.value.description,
    subject : { entities : this.entities.value },
    notification: {http: { url: this.createSubscription.value.url }},
    }
    console.log(JSON.stringify(payload));
    this.contextService.createSubscription(payload).then((res) => {
      alert('subscription created');
      this.ngOnInit();
    }).catch((err) =>{
      console.log('error', err);
    })
  }
}

