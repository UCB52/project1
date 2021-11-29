import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { DataService } from '../services/data.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers:[PersonService]
})
export class PersonComponent implements OnInit {

  constructor(private personService:PersonService,private dataService:DataService) { }

  ngOnInit(): void {
    this.personService.getPeople().subscribe(data=>{
      this.people=data;
    });
    this.dataService.currentMessage.subscribe(data=>{
      this.filterText2=data;
    })
  }
  people:Person[]=[];
  filterText2:string='';
}
