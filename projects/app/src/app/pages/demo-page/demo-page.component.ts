import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent implements OnInit {
  public content = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
