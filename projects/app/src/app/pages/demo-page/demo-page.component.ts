import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent implements OnInit {
  public content = new FormControl(`## イーハトーヴォ

  あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。

  ![image](https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif)

  <select>I'm innter text of select<option value="aa">I'm innter text of option</option></select>


  <my-selection>I'm innter text of my-selection<my-selection-item value="aa">I'm innter text of my-selection-item</my-selection-item></my-selection>

  <block>I'm inner text of block</block>`);

  constructor() {}

  ngOnInit(): void {}
}
