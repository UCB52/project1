import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../services/modal.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./footer2.component.css'],
  providers: [NgbModalConfig,NgbModal,ToastService,ModalService]
})
export class Footer2Component implements OnInit {

  constructor(private ngbModalConfig:NgbModalConfig, private ngbModal:NgbModal,private toastService:ToastService, private modalService:ModalService) { }

  ngOnInit(): void {
    
  }
  goNav(){
    document.getElementById('nav1')?.scrollIntoView();
  }
  //Modals
  open(content1:any){
    this.modalService.getModal(content1);
  }
  show=false;
  autohide=true;
  //Modals
  //Toast
  toast1(){
    this.toastService.showCustomSuccess("Bana güvendiğiniz için!","Teşekkürler");
  }
  //Toast
}
