import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {

  constructor(private toastr:ToastrService) { }
  
  showSuccess(){
    this.toastr.info('En kısa zamanda okuyacağım.', 'Teşekkürler!',{
      closeButton:true,
      timeOut:2500,
      extendedTimeOut:2500,
      easing:"ease-in-out",
      progressBar:true,
      positionClass:"toast-bottom-right",
      titleClass:"title1",
      messageClass:"message1",
      tapToDismiss:true
    });
  }
  showError(){
    this.toastr.error('Lütfen karakter sınırlamasına dikkat ediniz.', 'Hata!',{
      closeButton:true,
      timeOut:2500,
      extendedTimeOut:2500,
      easing:"ease-in-out",
      progressBar:true,
      positionClass:"toast-bottom-right",
      titleClass:"title1",
      messageClass:"message1",
      tapToDismiss:true
    });
  }
  showCustomError(err1:string,err2:string){
    this.toastr.error(err1, err2,{
      closeButton:true,
      timeOut:2500,
      extendedTimeOut:2500,
      easing:"ease-in-out",
      progressBar:true,
      positionClass:"toast-bottom-right",
      titleClass:"title1",
      messageClass:"message1",
      tapToDismiss:true
    });
  }
  showCustomSuccess(msg1:string,msg2:string){
    this.toastr.success(msg1, msg2,{
      closeButton:true,
      timeOut:2500,
      extendedTimeOut:2500,
      easing:"ease-in-out",
      progressBar:true,
      positionClass:"toast-bottom-right",
      titleClass:"title1",
      messageClass:"message1",
      tapToDismiss:true
    });
  }
}
