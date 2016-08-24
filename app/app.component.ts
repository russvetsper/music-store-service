import { Component, EventEmitter } from 'angular2/core';
import { Music } from './music.model'
import { MusicListComponent } from './music-list.component'

@Component({
  selector: 'my-app',
  directives:[MusicListComponent],
  template: `
    <div class="container">
      <h1>Music Inventory</h1>
      <h2>Add New Music Now</h2>
      <music-list [MusicList]="music"></music-list>
    </div>
  `
})
export class AppComponent {
  public music: Music[];
  constructor() {
    this.music = [
      new Music("Miller",2013, "Watery", 21, 0),
      new Music("Guiness",2013, "Dark", 21, 1),
      new Music("Shocktop",2013, "Light", 21, 2),
      new Music("Ocktoberfest",2013, "Dark", 21, 3),
      new Music("Corona",2013, "Watery", 21, 4)
    ];
  }

}
