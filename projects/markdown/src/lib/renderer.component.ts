import { Component, Input, OnInit } from '@angular/core';
import * as remark from 'remark';

@Component({
  selector: 'md-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements OnInit {
  @Input() public md = '';
  @Input() public parsedMd;

  constructor() {}

  ngOnInit(): void {
    console.log(this.parsedMd);
    if (this.parsedMd === undefined && this.md !== '') {
      this.parsedMd = remark().parse(this.md);
    }
    console.log(this.parsedMd);
  }
}
