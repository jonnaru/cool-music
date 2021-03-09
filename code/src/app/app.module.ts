import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { ListModalComponent } from './list-modal/list-modal.component';
import { PlayComponent } from './lib/play/play.component';
import { IconButtonComponent } from './lib/icon-button/icon-button.component';
import { ExitComponent } from './lib/exit/exit.component';
// import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FilterbarComponent,
    ListModalComponent,
    PlayComponent,
    IconButtonComponent,
    ExitComponent,
    // ModalComponent
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


