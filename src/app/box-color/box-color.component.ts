import { Component, OnInit } from '@angular/core';
import { FibService } from '../fib.service';

@Component({
  selector: 'app-box-color',
  templateUrl: './box-color.component.html',
  styleUrls: ['./box-color.component.css']
})

export class BoxColorComponent implements OnInit {

  srv: any;

  constructor(private service: FibService) {
    this.srv = service;
  }

  changeBoxColor(color:string) {
    this.srv.setBoxColor(color);
  }

  ngOnInit() {
  }

}
