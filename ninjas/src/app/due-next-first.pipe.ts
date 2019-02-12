import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dueNextFirst'
})
export class DueNextFirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
