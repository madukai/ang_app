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
    cRadius: number;
    goBig: boolean;
    timeOutHandler: any;

  	constructor() { 
		this.strokeColor = "yellow";
        this.cRadius = 20;
        this.strokeWidth = 4;
        this.goBig = true;
        this.timeOutHandler = 0;
  	}

  	clickSVGCircle(e) {
        if (this.cRadius === 20) {
            this.cRadius = 45;
        } else {
            this.cRadius = 20;
        }
  	}

  	SVGPolygon(e) {
        // Mouse down
        if (e.type === 'mousedown') {
            // use setinterval to repeat calling
            this.timeOutHandler = setInterval(() => {
                this.manipulatePolygon();
            }, 100);
        } else if (e.type === 'mouseup') {
            // cancel setinterval
            clearInterval(this.timeOutHandler);
            this.timeOutHandler = 0;
        }
    }

    manipulatePolygon() {
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
