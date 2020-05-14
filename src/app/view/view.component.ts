import { Component, OnInit } from '@angular/core';
import { FibService } from '../fib.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  fService: FibService;
  result: number;
  boxColor: string;

  constructor(private service: FibService) {
    this.fService = service;
    this.result = 0;
  }

  ngOnInit() {
    this.fService.$numEmitter.subscribe( (data) => {
      this.result = data;
    });

    this.fService.$boxColorEmitter.subscribe( (data) => {
      this.boxColor = data;
    });
  }
}
