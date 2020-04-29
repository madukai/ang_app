import { Component, OnInit } from '@angular/core';
import { FibService } from '../fib.service';

@Component({
  selector: 'app-fib-mod',
  templateUrl: './fib-mod.component.html',
  styleUrls: ['./fib-mod.component.css']
})
export class FibModComponent implements OnInit {

  fib: any;
  n: number;

  constructor(private service: FibService) { 
    this.fib = service;
    this.n = 0;
  }

  clickEvent() {
    this.fib.setData(this.n);
  }

  calcFib(e) {
    this.n = e.target.value;
  }

  ngOnInit() {
  }

}
