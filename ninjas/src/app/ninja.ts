export class ProjectDetails {
    title: string;
    updatedBy: string;
    completedLastWeek: string;
    upcomingWork: string;
    issues: string;
    projectDue: Date;
  }
  
  export class Ninja {
    _id: string;
    name: string;
    team: string;
    skills: string[];
    projects: string[];
    ninjaRating: number;
    projectDetails: any[];
  }

  