import { Component, OnInit } from '@angular/core';
import {
  appendTo,
  classes,
  attr,
  create,
  innerSVG
} from 'tiny-svg';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {

  canvas: SVGElement;

  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('canvas') as any as SVGElement;
  }

  addLine() {
    const line = create('line');
    attr(line, {
      x1: 200,
      y1: 200,
      x2: 300,
      y2: 300,
      stroke: 'black'
    });
    appendTo(line, this.canvas);
  }

  addRectangle() {
    const rect = create('rect');
    attr(rect, {
      x: 100,
      y: 100,
      width: 80,
      height: 50,
      stroke: 'blue',
      fill: 'yellow'
    });
    appendTo(rect, this.canvas);
  }

  addCircle() {
    const circle = create('circle');
    attr(circle, {
      cx: 400,
      cy: 400,
      r: 50
    });
    appendTo(circle, this.canvas);
  }

}
