import { Component, OnInit } from '@angular/core';
import { JsonReaderModule } from '../json-reader/json-reader.module';

@Component({
  selector: 'app-svg-path',
  templateUrl: './svg-path.component.html',
  styleUrls: ['./svg-path.component.css']
})
export class SvgPathComponent implements OnInit {

    jsonCoords: any;
    pathPts: string;
    coordPts: number[];
    numCoords: number;

    constructor() {
        this.jsonCoords = new JsonReaderModule();
        this.pathPts = '';
        this.coordPts = this.jsonCoords.getCoords();
        this.numCoords = 15;
    }

    drawSVGPathJSON() {
        this.pathPts = '';
        for (let i in this.coordPts) {
            this.pathPts += `${this.coordPts[i][0]},${this.coordPts[i][1]} `;
        }
    }

    drawSVGPathRand() {
        this.pathPts = '';
        let intervalHandler;
        let i = 0;

        intervalHandler = setInterval(() => {
            if (i < this.numCoords) {
                let xPos = Math.floor(Math.random() * 700) + 10;
                let yPos = Math.floor(Math.random() * 730) + 10;
                this.pathPts += `${xPos},${yPos} `;
                i++;
            } else {
                clearInterval(intervalHandler);
            }
        }, 500);
    }

    ngOnInit() {
    }

}
