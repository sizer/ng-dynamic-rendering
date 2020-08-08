import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { MarkdownModule } from '../../../markdown/src/lib/markdown.module';

@NgModule({
  declarations: [AppComponent, DemoPageComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MarkdownModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
