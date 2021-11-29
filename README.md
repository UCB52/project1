# project1
*My first project with angular which is %95 dynamic.<br>
*"city" component includes wide "city" objects.There are many cities from Turkey.<br>
*"person" component also includes wide "person" objects.There are many important people from history.<br>
*"about" component also describes me.İt is 3 parts:<br>
-1st part is about my skills.<br>
-2nd part is about my certificates.<br>
-3rd part includes a stepper for my CV within a form.<br>

*Used modules:<br>

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { RightBannerComponent } from './right-banner/right-banner.component';
import { CityDetailPlaceComponent } from './city/city-detail/city-detail-place/city-detail-place.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ng2-tooltip-directive';
import { Footer2Component } from './footer2/footer2.component';
import { Footer3Component } from './footer3/footer3.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDividerModule} from '@angular/material/divider';
import { AboutComponent } from './about/about.component'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './city/filter.pipe';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { PersonFilterPipe } from './person/person-filter.pipe';

