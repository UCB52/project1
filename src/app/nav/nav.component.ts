import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

declare var $ : any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,AfterViewInit {

  constructor(private fb:FormBuilder,private dataService:DataService) { }  
  ngAfterViewInit(): void {    
    $(window).on('resize',function(){
      if($(document).width()<990){
        $('.nav-link').attr('data-bs-toggle','collapse');
        $('.nav-link').attr('data-bs-target','#navbarColor01')
      }
      else{
        $('.nav-link').attr('data-bs-toggle','');
        $('.nav-link').attr('data-bs-target','')
      }
    }).trigger('resize');
  }
  
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

