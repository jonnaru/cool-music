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
import { LogoComponent } from './lib/logo/logo.component';
import { ButtonComponent } from './lib/sign-up-button/button.component';
import { LoginButtonComponent } from './lib/login-button/login-button.component';
import { FooterComponent } from './footer/footer.component';
import { FooterLogoComponent } from './lib/footer-logo/footer-logo.component';
import { HamburgerComponent } from './lib/hamburger/hamburger.component';
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
    LogoComponent,
    ButtonComponent,
    LoginButtonComponent,
    FooterComponent,
    FooterLogoComponent,
    HamburgerComponent,
    // ModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
