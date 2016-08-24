import { Pipe, PipeTransform } from 'angular2/core';
import { Music } from './music.model';

@Pipe({
  name: 'genre',
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Music[], info) {
    var desiredGenre = info[0];
    var output: Music[] = [];
    if (desiredGenre === "rock") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].genre === "rock") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "rap") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "rap") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "pop") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "pop") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
