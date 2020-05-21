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

    constructor() {
        this.jsonCoords = new JsonReaderModule();
        this.pathPts = '';
        this.coordPts = this.jsonCoords.getCoords();
    }

    drawSVGPath() {
        this.pathPts = '';
        for (let i in this.coordPts) {
            this.pathPts += `${this.coordPts[i][0]},${this.coordPts[i][1]} `;
        }
    }

    ngOnInit() {
    }

}
