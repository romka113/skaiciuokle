import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkaiciuokleComponent } from './components/skaiciuokle/skaiciuokle.component';
import { FormsModule } from '@angular/forms';
import { LietausRezervuorasComponent } from './components/lietaus-rezervuoras/lietaus-rezervuoras.component';

@NgModule({
  declarations: [AppComponent, SkaiciuokleComponent, LietausRezervuorasComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
