import { BreakpointObserver } from '@angular/cdk/layout';
import {
  StepperOrientation,
  STEPPER_GLOBAL_OPTIONS,
} from '@angular/cdk/stepper';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Certificate } from '../models/certificate';
import { Cvform } from '../models/cvform';
import { Skill } from '../models/skill';
import { AboutService } from '../services/about.service';
import { CvformService } from '../services/cvform.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    AboutService,
    ToastService,
    CvformService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AboutComponent implements OnInit, AfterViewInit {
  skills: Skill[] = [];
  certificates: Certificate[] = [];
  constructor(
    private aboutService: AboutService,
    private fb: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private toastService: ToastService,
    private cvformService: CvformService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width:800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngAfterViewInit(): void {
    //pagination
    this.previousLabel = 'Önceki';
    this.nextLabel = 'Sonraki';
    this.directionLinks = true;
    this.autoHide = true;
    this.responsive = true;
    //pagination
  }

  ngOnInit(): void {
    this.aboutService.getSkill().subscribe((data) => {
      this.skills = data;
    });
    this.aboutService.getCertificate().subscribe((data) => {
      this.certificates = data;
    });
  }
  //pagination
  p: number = 1;
  @Input() maxSize!: number;
  @Input() previousLabel!: string;
  @Input() nextLabel!: string;
  @Input() directionLinks!: boolean;
  @Input() autoHide!: boolean;
  @Input() responsive!: boolean;
  total2: number = this.certificates.length;
  total1: number = this.skills.length;
  //pagination
  //sort
  data: string = 'name';
  data1: string = 'name';
  data2: string = 'name';
  reverse: boolean = false;
  sort1(data: string) {
    this.data = data.toLocaleUpperCase();
    this.reverse = !this.reverse;
  }
  sort(data: string) {
    let x = this.data1.toLocaleLowerCase();
    x = data.toLocaleLowerCase();
    this.reverse = !this.reverse;
  }
  sort2(data: string) {
    let x = this.data2.toLocaleLowerCase();
    x = data.toLocaleLowerCase();
    this.reverse = !this.reverse;
  }
  //sort
  //Stepper
  firstFormGroup = this.fb.group({
    name: ['', [Validators.required,Validators.maxLength(50),Validators.minLength(5)]],
  });
  secondFormGroup = this.fb.group({
    email: ['', [Validators.required,Validators.email,Validators.maxLength(50),Validators.minLength(5)]],
  });
  get getFirstCtrl() {
    return this.firstFormGroup.get('name')?.value;
  }
  get getSecondCtrl() {
    return this.secondFormGroup.get('email')?.value;
  }
  stepperOrientation!: Observable<StepperOrientation>;
  //Stepper
  currentRate = 2;
  tabLoadTimes: Date[] = [];
  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  background1: ThemePalette = 'primary';
  color1: ThemePalette = 'warn';
  cvHref: string = 'javascript:void(0)';
  cvTarget: string = '_self';
  form: Cvform = new Cvform();
  onSubmit() {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      this.toastService.showCustomError(
        'Please fill in all the blanks',
        'Error!'
      );
      this.cvHref = 'javascript:void(0)';
      this.cvTarget = '_self';
    } else {
      this.cvHref = 'https://github.com/UCB52/MyCV';
      this.cvTarget = '_blank';
      this.toastService.showCustomSuccess(
        'CV Bilgilerime Ulaştınız',
        'Tebrikler!'
      );
      this.form = Object.assign(
        {},
        this.firstFormGroup.value,
        this.secondFormGroup.value
      );
      this.cvformService.postcvForm(this.form).subscribe((data) => {
        console.warn(data.name + 'Başarıyla eklendi');
        console.warn(data.email + 'Başarıyla eklendi');
      });
      this.firstFormGroup.patchValue({
        name: '',
      });
      this.secondFormGroup.patchValue({
        email: '',
      });
    }
  }
}
