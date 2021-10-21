import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjaxgetComponent } from './components/ajaxget/ajaxget.component';
import { AjaxpostComponent } from './components/ajaxpost/ajaxpost.component';
import {CurrentdateService} from './services/currentdate.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    HomeComponent,
    AjaxgetComponent,
    AjaxpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [CurrentdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
