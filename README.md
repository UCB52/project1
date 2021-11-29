# presentationProject1
*My first project with angular which is %95 dynamic.<br>
*"city" component includes wide "city" objects.There are many cities from Turkey.<br>
*"person" component also includes wide "person" objects.There are many important people from history.<br>
*"about" component describes me.İt is 3 parts:<br>
-1st part is about my skills.<br>
-2nd part is about my certificates.<br>
-3rd part includes a stepper for my CV within a form.<br>

*Used modules:<br>

import { NgModule } from '@angular/core';<br>
import { BrowserModule } from '@angular/platform-browser';<br>

import { RouterModule } from '@angular/router';<br>
import { AppRoutingModule } from './app-routing.module';<br>
import { AppComponent } from './app.component';<br>
import { ValueComponent } from './value/value.component';<br>
import { HttpClientModule } from '@angular/common/http';<br>
import { NavComponent } from './nav/nav.component';<br>
import { CityComponent } from './city/city.component';<br>
import { CityDetailComponent } from './city/city-detail/city-detail.component';<br>
import { RightBannerComponent } from './right-banner/right-banner.component';<br>
import { CityDetailPlaceComponent } from './city/city-detail/city-detail-place/city-detail-place.component';<br>
import { FooterComponent } from './footer/footer.component';<br>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';<br>
import { ReactiveFormsModule } from '@angular/forms';<br>
import { FormService } from './services/form.service';<br>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';<br>
import { ToastrModule } from 'ngx-toastr';<br>
import { TooltipModule } from 'ng2-tooltip-directive';<br>
import { Footer2Component } from './footer2/footer2.component';<br>
import { Footer3Component } from './footer3/footer3.component';<br>
import {MatCardModule} from '@angular/material/card'; <br>
import {MatButtonModule} from '@angular/material/button'; <br>
import {MatProgressBarModule} from '@angular/material/progress-bar'; <br>
import {MatDividerModule} from '@angular/material/divider';<br>
import { AboutComponent } from './about/about.component'; <br>
import {MatTabsModule} from '@angular/material/tabs'; <br>
import {MatTableModule} from '@angular/material/table'; <br>
import {MatPaginatorModule} from '@angular/material/paginator';<br>
import { Ng2SearchPipeModule } from 'ng2-search-filter';<br>
import { OrderModule } from 'ngx-order-pipe';<br>
import { NgxPaginationModule } from 'ngx-pagination';<br>
import {MatStepperModule} from '@angular/material/stepper'; <br>
import {MatFormFieldModule} from '@angular/material/form-field';<br> 
import {MatInputModule} from '@angular/material/input'; <br>
import { Ng2CompleterModule } from 'ng2-completer';<br>
import { FormsModule } from '@angular/forms';<br>
import { FilterPipe } from './city/filter.pipe';<br>
import { PersonComponent } from './person/person.component';<br>
import { PersonDetailComponent } from './person/person-detail/person-detail.component';<br>
import { PersonFilterPipe } from './person/person-filter.pipe';<br>

