import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-connect',
  templateUrl: './move-connect.component.html',
  styleUrls: ['./move-connect.component.css'],
  host: {'(document:keydown)': 'keyDownInput($event)'}
})
export class MoveConnectComponent implements OnInit {

    // public
    public polyPts1: string;
    public polyPts2: string;
    public svgDrawAreaClass: string;

    // private
    private connectionPts = [{x:80, y:80}, {x:210, y:210}, {x:340, y:340}];
    private isRun: boolean;

    constructor() { 
        this.isRun = false;
    }

    ngOnInit() {
        this.initPtsForPoly();
        this.svgDrawAreaClass = 'svg-draw-area app-inactive';
    }

    initPtsForPoly() {
        this.polyPts1 = `${this.connectionPts[0].x},${this.connectionPts[0].y} ${this.connectionPts[1].x},${this.connectionPts[1].y}`;
        this.polyPts2 = `${this.connectionPts[1].x},${this.connectionPts[1].y} ${this.connectionPts[2].x},${this.connectionPts[2].y}`;
    }

    connectCompRun() {
        if (this.isRun === true) {
            this.svgDrawAreaClass = 'svg-draw-area app-active';
            this.updatePts();
            requestAnimationFrame((time) => this.connectCompRun());
        } else {
            this.svgDrawAreaClass = 'svg-draw-area app-inactive';
        }
    }

    updatePts() {
        this.polyPts1 = `${this.connectionPts[0].x},${this.connectionPts[0].y} ${this.connectionPts[1].x},${this.connectionPts[1].y}`;
        this.polyPts2 = `${this.connectionPts[1].x},${this.connectionPts[1].y} ${this.connectionPts[2].x},${this.connectionPts[2].y}`;
    }

    /**
     * Method to process key down input event
     */
    keyDownInput(ev:KeyboardEvent) {
        // r key
        if (ev.keyCode === 82) {
            this.isRun = !this.isRun;
            this.connectCompRun();
        }
        // w key
        if (ev.keyCode === 87) {
            this.connectionPts[1].y -= 1;
        }
        // s key
        if (ev.keyCode === 83) {
            this.connectionPts[1].y += 1;
        }
    }
}
