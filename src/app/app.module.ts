import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MoviesDataService } from './moviesdata.service';
import { StoreadminComponent } from './storeadmin/storeadmin.component';
import { MovieitemComponent } from './movieitem/movieitem.component';
import { NewmoviesComponent } from './newmovies/newmovies.component';
import { NewmovieitemComponent } from './newmovieitem/newmovieitem.component';
import { NewmoviequerymenuComponent } from './newmoviequerymenu/newmoviequerymenu.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MemberComponent } from './member/member.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { BasicAuthHttpInterceptorService } from './basic-auth-http-interceptor.service';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieitemmemeberviewComponent } from './movieitemmemeberview/movieitemmemeberview.component';
import { MoviedetailsviewComponent } from './moviedetailsview/moviedetailsview.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreadminComponent,
    MovieitemComponent,
    NewmoviesComponent,
    NewmovieitemComponent,
    NewmoviequerymenuComponent,
    GuestComponent,
    LoginComponent,
    ErrorComponent,
    MemberComponent,
    LogoutComponent,
    HeaderComponent,
    SignupComponent,
    MovieitemmemeberviewComponent,
    MoviedetailsviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDividerModule
    
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
