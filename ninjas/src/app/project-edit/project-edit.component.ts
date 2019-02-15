import { Component, OnInit, Input } from '@angular/core';

import { NinjaDataService } from '../ninja-data.service';
import { Ninja, ProjectDetails } from '../ninja';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {


  @Input() editProjectDetails: ProjectDetails;
  //Object for submitted form data for passing around. 
  //Is a newProject, has properties, title, updatedBy, etc.
   public doEditProjectDeatils: ProjectDetails = {
      _id: '',
      title: '',
      updatedBy: '',
      completedLastWeek: '',
      upcomingWork: '',
      issues: '',
      projectDue: new Date()
    };
  constructor() { }

  ngOnInit() {
  }

}
