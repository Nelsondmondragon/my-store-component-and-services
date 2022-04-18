import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    return formatDistance(new Date(), value);
  }


  // return value
  //   .split('')
  //   .map((word:string) =>(word in vowels)? vowels[word]: word)
  //   .join('')

}
