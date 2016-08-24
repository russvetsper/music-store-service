import { Component} from 'angular2/core';
import { Music } from './music.model'

@Component({
  selector: 'music-list',
  inputs: ['MusicList'],
  template:  `
  <div *ngFor="#currentMusic of MusicList">
  <h3>{{currentMusic.artist}} | {{currentMusic.year}}  | {{currentMusic.genre}}</h3>
  <form>
  <input  [(ngModel)]="currentMusic.artist">
  <input  [(ngModel)]="currentMusic.year">
  <input  [(ngModel)]="currentMusic.genre">

  </form>
  </div>
  `
})
export class MusicListComponent{
  public MusicList:Music[];
  public selectedMusic:Music;
}
