import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContextBrokerService } from '../services/context-broker.service';



@Component({
  selector: 'app-off-chain-db',
  templateUrl: './off-chain-db.component.html',
  styleUrls: ['./off-chain-db.component.css']
})
export class OffChainDBComponent implements OnInit {
  displayedColumns: string[] = ['id', 'type', 'address', 'asset','activityAlert','dairyAlert','drinkingAlert', 'resttimeAlert','temratureAlert','weightAlert', 'status', 'message'];
  dataSource: any;
  data:OffChainActivity[];
  public asset;
  public type;
  isData;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private context: ContextBrokerService) {
  }

  getData() {
    var query = (this.asset) ? '?type='+this.type+ '&q=asset==' +this.asset+ '&options=keyValues' : '?type='+this.type+'&options=keyValues';
    console.log('query',query);
    this.context.query(query).then((res) => {
      console.log('res',JSON.stringify(res));
      this.data = <OffChainActivity[]>res;
      this.dataSource = new MatTableDataSource<OffChainActivity>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isData = true;
    }).catch((error) => {
      alert('Error is fetching devices' + JSON.stringify(error));
    });

  }

  ngOnInit() {
    this.isData = false;
    this.type = 'add-animal-event';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



export interface OffChainActivity {
  id: string;
  type: string;
  address: string;
  asset: string;
  activityAlert: string;
  dairyAlert: string;
  drinkingAlert: string;
  resttimeAlert: string;
  status: string;
  temratureAlert: string;
  weightAlert: string;
  message: string;
}
