import { Component} from 'angular2/core';
import { Music } from './music.model'

@Component({
  selector: 'music-list',
  inputs: ['MusicList'],
  template:  `
  <div *ngFor="#currentMusic of MusicList" (click)="MusicClicked(currentMusic)"
    [class.selected]="currentMusic === selectedMusic">
  <h3>{{currentMusic.artist}} | {{currentMusic.year}}  | {{currentMusic.genre}} | {{currentMusic.price| currency:"USD":true:"1.2-4"}} </h3>
  <form *ngIf="currentMusic === selectedMusic">
  <input  [(ngModel)]="currentMusic.artist">
  <input  [(ngModel)]="currentMusic.year">
  <input  [(ngModel)]="currentMusic.genre">
  <input  [(ngModel)]="currentMusic.price " type="number"  aria-label="amount">

  </form>
  </div>
  `
})
export class MusicListComponent{
  public MusicList:Music[];
  public selectedMusic:Music;
  MusicClicked(currentMusic:Music):void{
    this.selectedMusic=currentMusic;
  }
}
