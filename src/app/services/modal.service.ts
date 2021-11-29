import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {

  constructor(private ngbModalConfig:NgbModalConfig,private ngbModal:NgbModal) {
    ngbModalConfig.keyboard = true;
    ngbModalConfig.animation = true;
    ngbModalConfig.centered = true;
    ngbModalConfig.size = 'md';
    ngbModalConfig.backdropClass = 'light-blue-backdrop';
    ngbModalConfig.scrollable=true;    
   }
   getModal(content:any){
    this.ngbModal.open(content);
   }
}
