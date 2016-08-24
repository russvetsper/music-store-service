import { Component, EventEmitter } from 'angular2/core';
import { Music } from './music.model';
import { MusicListComponent } from './music-list.component';
import { addMusicComponent } from './new-music.component';
import {MusicItemService } from './music-item.service';

@Component({
  selector: 'my-app',
  directives:[MusicListComponent,addMusicComponent],
  template: `
    <div class="container">
      <h1>Music Inventory</h1>
      <h2>Add New Music Now</h2>
      <div class="row">
      <div class="col-xs-6">
      <music-list></music-list>
      </div>
      <div class="col-xs-6">

      <add-music (onSubmitNewMusic)="createMusic($event)"></add-music>
      </div>
      </div>

    </div>
  `
})
export class AppComponent {
  public music: Music[];
  constructor(private musicItemService:MusicItemService) {

  }
  createMusic(MusicDetail:string[]):void{
    var tempYear : number = parseInt(MusicDetail[1]);
    var tempPrice : number = parseInt(MusicDetail[3]);
    var tempListMusic= this.musicItemService.get();
    this.musicItemService.add(new Music(MusicDetail[0], tempYear, MusicDetail[2], tempPrice, tempListMusic.length));
    console.log("submit");
  }


}
