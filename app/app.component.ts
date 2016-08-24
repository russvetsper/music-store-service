import { Component, EventEmitter } from 'angular2/core';
import { Music } from './music.model'
import { MusicListComponent } from './music-list.component'
import { addMusicComponent } from './new-music.component'
@Component({
  selector: 'my-app',
  directives:[MusicListComponent,addMusicComponent],
  template: `
    <div class="container">
      <h1>Music Inventory</h1>
      <h2>Add New Music Now</h2>
      <music-list></music-list>
      <add-music (onSubmitNewMusic)="createMusic($event)"></add-music>

    </div>
  `
})
export class AppComponent {
  public music: Music[];
  constructor() {
    this.music = [
      new Music("Miller",2013, "rock", 21, 0),
      new Music("Guiness",2013, "rock", 21, 1),
      new Music("Shocktop",2013, "rock", 21, 2),
      new Music("Ocktoberfest",2013, "rap", 21, 3),
      new Music("Corona",2013, "pop", 21, 4)
    ];
  }
  createMusic(MusicDetail:string[]):void{
    var tempYear : number = parseInt(MusicDetail[1]);
    var tempPrice : number = parseInt(MusicDetail[3]);

    this.music.push(
       new Music(MusicDetail[0], tempYear, MusicDetail[2], tempPrice, this.music.length)
     );
  }

}
