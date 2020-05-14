import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-mod',
  templateUrl: './svg-mod.component.html',
  styleUrls: ['./svg-mod.component.css']
})
export class SvgModComponent implements OnInit {

  @Input() colorData: string;
  strokeColor: string;

  constructor() { 
    this.strokeColor = "yellow";
  }

  ngOnInit() {
    this.colorData = "blueviolet";
  }

}
