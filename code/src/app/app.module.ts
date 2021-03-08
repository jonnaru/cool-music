import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { ListModalComponent } from './list-modal/list-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FilterbarComponent,
    ListModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
