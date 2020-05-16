import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-mod',
  templateUrl: './svg-mod.component.html',
  styleUrls: ['./svg-mod.component.css']
})
export class SvgModComponent implements OnInit {

	@Input() colorData: string;
    strokeColor: string;
    strokeWidth: number;
    cRadius: string;
    goBig: boolean;  

  	constructor() { 
		this.strokeColor = "yellow";
        this.cRadius = "20";
        this.strokeWidth = 4;
        this.goBig = true;
  	}

  	clickSVGCircle() {
    	if (this.cRadius === "45") {
      		this.cRadius = "20";
    	} else {
      		this.cRadius = "45";
    	}
  	}

  	SVGPolygon(e) {
        // increase border of polygon
        if (this.goBig === true) {
            if (this.strokeWidth < 21) {
                this.strokeWidth += 2;
            } else {
                this.goBig = false;
            }
        } else { // decrease border of polygon
            if (this.strokeWidth > 5) {
                this.strokeWidth -= 2;
            } else {
                this.goBig = true;
            }
        }
    }

  	ngOnInit() {
    	this.colorData = "blueviolet";
  	}
}
