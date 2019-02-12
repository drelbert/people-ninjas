import { Component, OnInit, Input } from '@angular/core';

import { Ninja, ProjectDetails } from '../ninja';
import { NinjaDataService } from '../ninja-data.service';

@Component({
  selector: 'app-ninja-details',
  templateUrl: './ninja-details.component.html',
  styleUrls: ['./ninja-details.component.css']
})
export class NinjaDetailsComponent implements OnInit {



@Input() ninja: Ninja;
//Object for submitted form data for passing around. 
//Is a newProject, has properties, title, updatedBy, etc.
public newProject: ProjectDetails = {
    title: '',
    updatedBy: '',
    completedLastWeek: '',
    upcomingWork: '',
    issues: '',
    projectDue: new Date()
  };

<<<<<<< HEAD
  
//Making the data service available.
constructor(private ninjaDataService: NinjaDataService) { }
=======

  public formVisible: boolean = false;
  public formError: string;

  constructor(private ninjaDataService: NinjaDataService) { }
>>>>>>> e96dffc4520a143c95466867e335d19116101744

  ngOnInit() {
  }

public formVisible: boolean = false;
public formError: string;

private formIsValid(): boolean {
  if (this.newProject.title && this.newProject.updatedBy && this.newProject.completedLastWeek && this.newProject.upcomingWork && this.newProject.issues && this.newProject.projectDue) {
    return true;
  } else {
    return false;
  }
}

<<<<<<< HEAD
private resetAndHideProjectForm(): void {
  this.formVisible = false;
  this.newProject.title = '';
  this.newProject.updatedBy = '';
  this.newProject.completedLastWeek = '';
  this.newProject.upcomingWork = '';
  this.newProject.issues = '';
  this.newProject.projectDue = new Date;
}

public newProjectSubmit(): void {
=======


public onProjectSubmit(): void {
>>>>>>> e96dffc4520a143c95466867e335d19116101744
  this.formError = '';
  if (this.formIsValid()) {
    console.log(this.newProject);
    this.ninjaDataService.addProjectByNinjaId(this.ninja._id, this.newProject)
      .then(projectDetail => {
        console.log('Review saved Jerr.', projectDetail);
        //this.ninja.projectDetails.unshift(projectDetail);
        this.resetAndHideProjectForm();
      });
    } else {
      this.formError = 'Please complete each field.';
    }
  }

}


/*
Old code snippet for newProjectSubmit()
      .then((projectDetails: ProjectDetails) => {
        console.log('Project Saved Jerr', projectDetails)
        let projectDetail = this.ninja.projectDetail.slice(0);
        projectDetail.unshift(projectDetails);
        this.ninja.projectDetail = projectDetail;
        this.resetAndHideProjectForm();
*/