import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FibService {

    givenNum = 0;
    dataNum: number[];
    $numEmitter = new EventEmitter();
    $boxColorEmitter = new EventEmitter();

    constructor() {}

    setData(n = 0) {
        this.givenNum = n;
        this.$numEmitter.emit(this.givenNum);
    }

    setBoxColor(color:string) {
        this.$boxColorEmitter.emit(color);
    }
}