import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewComponent } from './new/new.component';
import { GoatComponent } from './goat/goat.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NewComponent,GoatComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
