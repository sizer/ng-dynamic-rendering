import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';

@NgModule({
  declarations: [AppComponent, DemoPageComponent],
  imports: [AppRoutingModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
