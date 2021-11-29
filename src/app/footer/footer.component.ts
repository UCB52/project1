import {
  AfterViewInit,
  Component,
  OnInit,  
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Form } from '../models/form';
import { FormService } from '../services/form.service';
import { ToastService } from '../services/toast.service';
import { TooltipService } from '../services/tooltip.service';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./footer.component.css'],
  providers: [FormService,ToastService, NgbModalConfig, NgbModal,TooltipService],
})
export class FooterComponent implements OnInit, AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private config: NgbModalConfig,
    private modalService: NgbModal,
    private toastService: ToastService,
    private tooltipService:TooltipService
  ) {
    config.keyboard = true;
    config.animation = true;
    config.centered = true;
    config.size = 'md';
    config.backdropClass = 'light-blue-backdrop';
  }  
  // ng-modal
  open(content: any) {
    this.modalService.open(content);
  }
  show = false;
  autohide = true;
  // ng-modal
  //ng-tooltip
  myOptions:{}={};
  getTooltip(){
    this.myOptions = this.tooltipService.showTooltip();
  }
  //ng-tooltip

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#input2').focus(function () {
        $('#input2').animate({ height: '100px' }, 1000, 'swing');
      });
      $('#input2').blur(function () {
        $('#input2').animate({ height: '60px' }, 1000, 'swing');
      });
    });
    this.getTooltip();
  }
  form: Form = new Form();
  form1 = this.fb.group({
    fullName: ['', [Validators.required]],
    comment: [
      '',
      [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(10),
      ],
    ],
  });
  get getFullName() {
    return this.form1.get('fullName')?.value;
  }
  get getComment() {
    return this.form1.get('comment')?.value;
  }
  onSubmit() {
    if (this.form1.valid) {
      this.form = Object.assign({}, this.form1.value);
      this.form1.patchValue({
        fullName: '',
        comment: '',
      });
      this.toastService.showSuccess();
    } else {
      this.toastService.showError();
    }
    this.formService.postForm(this.form).subscribe((data) => {
      console.warn(data.comment + 'Başarıyla eklendi!');
      console.warn(data.fullName + 'Başarıyla eklendi!');
    });
  }
}
