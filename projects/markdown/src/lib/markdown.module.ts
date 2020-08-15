import { NgModule } from '@angular/core';
import { RendererComponent } from './renderer.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [RendererComponent],
  imports: [BrowserModule],
  exports: [RendererComponent],
})
export class MarkdownModule {}
