import { NgModule } from '@angular/core';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MarkdownRendererComponent],
  imports: [BrowserModule],
  exports: [MarkdownRendererComponent],
})
export class MarkdownModule {}
