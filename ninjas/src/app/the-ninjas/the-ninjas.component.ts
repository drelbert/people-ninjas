import { Component, OnInit } from '@angular/core';

import { NinjaDataService } from '../ninja-data.service';
import { Ninja } from '../ninja';



@Component({
  selector: 'app-the-ninjas',
  templateUrl: './the-ninjas.component.html',
  styleUrls: ['./the-ninjas.component.css']
})
export class TheNinjasComponent implements OnInit {

  constructor(private ninjaDataService: NinjaDataService) { }

  public ninjas: Ninja[];

  ngOnInit() {
    this.getNinjas();
  }

  private getNinjas(): void {
    this.ninjaDataService
      .getNinjas()
        .then(foundNinjas => this.ninjas = foundNinjas);
  }
}
