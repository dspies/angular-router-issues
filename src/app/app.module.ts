import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { TransferListComponent } from './transfer-list/transfer-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, TransferListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
