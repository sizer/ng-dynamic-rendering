import { NgModule } from '@angular/core';
import { MarkdownComponent } from './markdown.component';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';



@NgModule({
  declarations: [MarkdownComponent, MarkdownRendererComponent],
  imports: [
  ],
  exports: [MarkdownComponent]
})
export class MarkdownModule { }
