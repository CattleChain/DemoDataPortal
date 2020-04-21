import { Component, OnInit, ViewChild, forwardRef, Inject } from '@angular/core';
import { ContextBrokerService } from '../services/context-broker.service';
import * as uuid from 'uuid';
import { FormBuilder, Validators, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnimalModel } from 'src/app/models/animalModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-animal-curd',
  templateUrl: './animal-curd.component.html',
  styleUrls: ['./animal-curd.component.css'],
})

export class AnimalCURDComponent implements OnInit {
  createAnimalIdentity;
  public id;
  public type;
  isShow:Boolean = false;
  animals: AnimalModel[];
  animal: AnimalModel;
  displayedColumns: string[] = ['id', 'legalId', 'species'];
  dataSource:any;
  template:String;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private contextService: ContextBrokerService, private formBuilder: FormBuilder,) {
    this.createAnimalIdentity = this.formBuilder.group({
      id: new FormControl(),
      type: [null, Validators.required],
      legalId: [null, Validators.required],
      species: [null, Validators.required],
      birthdate: [null, Validators.required],
      birthtime: [null, Validators.required],
      sex: [null, Validators.required],
      breed: '',
      calvedBy: '',
      siredBy: '',
      location: '',
      weight: '',
      ownedBy: '',
      latitude: '',
      longitude: '',
      phenologicalCondition: '',
      reproductiveCondition: '',
      healthCondition: '',
      fedWith: '',
      welfareCondition: ''
    });
  }

  ngOnInit(): void {
    this.id = '';
    this.type = 'Animal';
    this.contextService.query('?type=Animal&options=keyValues').then((res) => {
      console.log(res);
      this.animals = <AnimalModel[]>res;
      this.dataSource = new MatTableDataSource<AnimalModel>(this.animals);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }).catch((error) => {
      alert('Error is fetching devices' + JSON.stringify(error));
    })
  }

  openDialog(element) {
    this.isShow = true;
    this.animal = element;
  }

  generateUUID() {
    this.id = 'urn:ngsi-ld:Animal:' + uuid.v4();
  }

  onCreate() {
    if (this.createAnimalIdentity.invalid) {
      return;
    }
    let body = {
      id: this.createAnimalIdentity.value.id,
      type: this.createAnimalIdentity.value.type,
      species: { value: this.createAnimalIdentity.value.species },
      legalId: { value: this.createAnimalIdentity.value.legalId },
      birthdate: { type: 'DateTime', value: this.createAnimalIdentity.value.birthdate },
      dateModified: { type: 'DateTime', value: new Date() },
      sex: { value: this.createAnimalIdentity.value.sex },
      breed: { value: this.createAnimalIdentity.value.breed },
      calvedBy: { type: 'Relationship', value: this.createAnimalIdentity.value.calvedBy },
      siredBy: { type: 'Relationship', value: this.createAnimalIdentity.value.siredBy },
      location: { type: 'geo:json', value: { type: 'Point', coordinates: [parseFloat(this.createAnimalIdentity.value.latitude), parseFloat(this.createAnimalIdentity.value.longitude)] } },
      weight: { value: this.createAnimalIdentity.value.weight },
      ownedBy: { type: 'Relationship', value: this.createAnimalIdentity.value.ownedBy },
      phenologicalCondition: { value: this.createAnimalIdentity.value.phenologicalCondition },
      reproductiveCondition: { value: this.createAnimalIdentity.value.reproductiveCondition },
      healthCondition: { value: this.createAnimalIdentity.value.healthCondition },
      fedWith: { type: 'Relationship', value: this.createAnimalIdentity.value.fedWith },
      welfareCondition: { value: this.createAnimalIdentity.value.welfareCondition }
    };
    this.contextService.create(body).then((animal) => {
      alert('new animal added' + JSON.stringify(animal));
      this.ngOnInit();
    }).catch((error) => {
      alert('Error : ' + JSON.stringify(error));
    })
  }
}