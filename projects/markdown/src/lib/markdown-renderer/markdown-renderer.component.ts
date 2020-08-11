import { Component, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'lib-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
})
export class MarkdownRendererComponent {
  @Input() public md = '';

  constructor(private cdRef: ChangeDetectorRef) {}
}
