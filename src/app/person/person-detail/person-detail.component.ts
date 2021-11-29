import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  providers: [PersonService,NgbAccordionConfig]
})
export class PersonDetailComponent implements OnInit{
  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute ,
    private accordionConfig:NgbAccordionConfig   
  ) {
    accordionConfig.animation=true;
    accordionConfig.closeOthers=true;
    accordionConfig.type="secondary";
  }
  
  person!:Person;    
  ngOnInit():void {
    const personId:any = this.activatedRoute.snapshot.paramMap.get('personId');
    this.personService.getPerson(personId).subscribe((data:Person)=>{
      this.person=data;
    });    
  }  
  scrollTo(){
    document.getElementById('img1')?.scrollIntoView();
  }    
}