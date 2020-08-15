import { Component, Input } from '@angular/core';
import * as remark from 'remark';

@Component({
  selector: 'md-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent {
  @Input() public md = '';

  constructor() {}

  get remarkedMD(): {} {
    console.log(remark().parse(this.md));
    return remark().parse(this.md);
  }
}
