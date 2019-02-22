import { Component, OnInit } from '@angular/core';

import { NinjaDataService } from '../ninja-data.service';
import { Ninja, ProjectDetails } from '../ninja';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ninjaDataService: NinjaDataService) { }

 public ninjas: Ninja[];
 public projectDetails: ProjectDetails[];


  ngOnInit(){
    this.getNinjas();
  }

  private getNinjas(): void {
    this.ninjaDataService
      .getNinjas()
       .then(foundNinjas => this.ninjas = foundNinjas);
  }
  
  public pageContent = {
    header: {
      title: 'Dashboard'
    },
    content: {
      body: 'Total Ninjas...'
    }
  }
}
