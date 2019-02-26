import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dueNextFirst'
})
export class DueNextFirstPipe implements PipeTransform {

  private compare(a, b) {
    const projectDueA = a.projectDue;
    const projectDueB = b.projectDue;

    let comparison = 1;
    if (projectDueA > projectDueB) {
      comparison = -1;
    }
    return comparison;
  }

  transform(projectDue: any[]): any[] {
    if (projectDue && projectDue.length > 0){
      return projectDue.sort(this.compare);
    }
    return null;
  }

}
