import { Component, OnInit, Input } from '@angular/core';
import { Ninja } from '../the-ninjas/the-ninjas.component';

@Component({
  selector: 'app-ninja-details',
  templateUrl: './ninja-details.component.html',
  styleUrls: ['./ninja-details.component.css']
})
export class NinjaDetailsComponent implements OnInit {

  @Input() ninja: Ninja;

  constructor() { }

  ngOnInit() {
  }

}
