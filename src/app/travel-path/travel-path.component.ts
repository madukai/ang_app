import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-path',
  templateUrl: './travel-path.component.html',
  styleUrls: ['./travel-path.component.css']
})

export class TravelPathComponent implements OnInit {

    public circlePathInfo: object = {
        currentPosition: {x:10, y:10},
        destinationPts: [{x:10, y:10}, {x:500, y:500}, {x:800, y:500}, {x:800 ,y:180}],
        currentPtIndex: 1
    }
    public circleRadius: Number;
    public buttonLabel: string;
    public svgPathPt: string;

    private runApp: boolean;
    private speed: number;

    constructor() {
        this.circleRadius = 12;
        this.buttonLabel = 'Start';
        this.runApp = false;
        this.speed = 3;
        this.svgPathPt = '';
    }

    ngOnInit() {
        console.log('Init on run');
        this.SVGPathPoints();
    }

    /**
     * Runs / stops the app 
     */
    runStopApp() {
        if (this.runApp === true) {
            this.buttonLabel = 'Start';
            this.runApp = false;
        } else {
            this.buttonLabel = 'Stop';
            this.runApp = true;
        }

        this.travelCircle();
    }

    /**
     * Runs travel
     */
    travelCircle() {
        if (this.runApp === true) {
            this.circleTravelPath(this.circlePathInfo);
            requestAnimationFrame((time) => this.travelCircle());
        }
    }

    /**
     * Set the pts for the path
     */
    SVGPathPoints() {
        this.svgPathPt = `M${this.circlePathInfo['destinationPts'][0].x} ${this.circlePathInfo['destinationPts'][0].y}`;
        for (let i = 1; i < this.circlePathInfo['destinationPts'].length; i++) {
            this.svgPathPt += ` L${this.circlePathInfo['destinationPts'][i].x} ${this.circlePathInfo['destinationPts'][i].y}`
        }

        console.log(this.svgPathPt);
    }
    

    /**
   * This function is to move the circle base on the current position and 
   * current target 
   * 
   * 
   * @param pathInfo {object}
   */
    circleTravelPath(pathInfo) {
        
        let i = pathInfo.currentPtIndex;
        let dx = pathInfo.destinationPts[i].x - pathInfo.currentPosition.x;
        let dy = pathInfo.destinationPts[i].y - pathInfo.currentPosition.y;

        let distance = Math.sqrt(dx*dx + dy*dy);

        if (distance >= this.speed) {
            let xVel = (dx/distance) * this.speed;
            let yVel = (dy/distance) * this.speed;
            pathInfo.currentPosition.x += xVel;
            pathInfo.currentPosition.y += yVel;
        } else {
            if (i+1 < pathInfo.destinationPts.length) {
                pathInfo.currentPtIndex++;
            } else {
                // reset
                pathInfo.currentPosition.x = pathInfo.destinationPts[0].x
                pathInfo.currentPosition.y = pathInfo.destinationPts[0].y
                pathInfo.currentPtIndex = 1;
            }
        }
    }
}
