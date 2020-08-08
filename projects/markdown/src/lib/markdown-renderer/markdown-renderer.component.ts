import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
})
export class MarkdownRendererComponent implements AfterViewInit {
  @ViewChild('c') public content: ElementRef;
  constructor() {}

  public ngAfterViewInit(): void {
    console.log(this.content.nativeElement.textContent);
  }
}
