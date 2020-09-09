import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import coords from './coords.json';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class JsonReaderModule {

    coordList: number[][];

    constructor() {
        this.coordList = coords.pointCoords;
    }

    getCoords(n) {
        return this.coordList;
    }
}
