import { Component, Input } from '@angular/core';
import * as remark from 'remark';

@Component({
  selector: 'lib-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
})
export class MarkdownRendererComponent {
  @Input() public md = '';

  constructor() {}

  get remarkedMD(): {} {
    console.log(remark().parse(this.md));
    return remark().parse(this.md);
  }
}
