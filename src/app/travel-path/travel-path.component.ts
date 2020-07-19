import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-path',
  templateUrl: './travel-path.component.html',
  styleUrls: ['./travel-path.component.css'],
  host: {'(document:keydown)': 'keyDownInput($event)', '(document:keyup)': 'keyUpInput($event)'}
})

export class TravelPathComponent implements OnInit {
    public circleRadius: number;
    public buttonLabel: string;
    public svgPathPt: string;

    public cirX: number;
    public cirY: number;

    private runApp: boolean;
    private speed: number;
    private doAccelerate: boolean;
    private circlePathInfo: object = {
        currentPosition: {x:0, y:0},
        destinationPts: [{x:10, y:10}, {x:500, y:500}, {x:800, y:500}, {x:800 ,y:180}],
        currentPtIndex: 1
    }

    constructor() {
        this.circleRadius = 12;
        this.buttonLabel = 'Start';
        this.runApp = false;
        this.speed = 0;
        this.svgPathPt = '';
        this.cirX = 10;
        this.cirY = 10;
        this.doAccelerate = false;
        this.circlePathInfo['currentPosition'].x = this.circlePathInfo['destinationPts'][0].x;
        this.circlePathInfo['currentPosition'].y = this.circlePathInfo['destinationPts'][0].y;
    }

    ngOnInit() {
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
            this.accelerateCircle();
            this.circleTravelPath(this.circlePathInfo);
            this.cirX = this.circlePathInfo['currentPosition'].x;
            this.cirY = this.circlePathInfo['currentPosition'].y;
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

    /**
     * Accelarete circle movement
     */
    accelerateCircle() {
        if (this.doAccelerate === true) {
            if (this.speed < 7) {
                this.speed += 0.1;
            }
        } else {
            if (this.speed > 0) {
                this.speed -= 0.1;
            } else {
                this.speed = 0;
            }
        }
    }

    /**
     * Method to process key down input event
     */
    keyDownInput(ev:KeyboardEvent) {
        // t key
        if (ev.keyCode === 84) {
            this.doAccelerate = true;
        }
    }

    /**
     * Method to process key up input event
     */
    keyUpInput(ev:KeyboardEvent) {
        // t key
        if (ev.keyCode === 84) {
            this.doAccelerate = false;
        }
    }
}
