import {Component,EventEmitter} from 'angular2/core';
import {Music} from './music.model'


@Component({
selector: 'add-music',
outputs:['onSubmitNewMusic'],
templateUrl :'/app/new-music.component.html'
})

export class addMusicComponent{
 public onSubmitNewMusic: EventEmitter<string[]>;
 constructor(){
  this.onSubmitNewMusic =new EventEmitter();
}
addMusic(artist:HTMLInputElement,year:HTMLInputElement,genre:HTMLInputElement,price:HTMLInputElement){
  var newMusicArray: string[] = [artist.value, year.value, genre.value,price.value];
  this.onSubmitNewMusic.emit(newMusicArray);
  artist.value = "";
  year.value = "";
  genre.value = "";
  price.value = "";

}
}
