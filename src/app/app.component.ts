import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {  
  filterText!:string;
  constructor(private dataService:DataService){}
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(data=>{
      this.filterText=data;
    });
  }
}
