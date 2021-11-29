import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private fb:FormBuilder,private dataService:DataService) { }  
  
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(data=>{
      this.filterText=data;
    })
  }
  form1 = this.fb.group({
    filterText:['',Validators.required]
  })
  filterText:string = this.form1.get('filterText')?.value;  
  change(){
    this.dataService.changeMessage(this.filterText);
  }
  resetF(){        
    setTimeout(() => 
{
  this.filterText="";
  this.dataService.changeMessage(this.filterText);
},
30000);
  }     
  reset(){
    this.filterText="";
    this.dataService.changeMessage(this.filterText);
  } 
}

