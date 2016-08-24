import { Component,EventEmitter } from 'angular2/core';
import { Music } from './music.model'
import { GenrePipe } from './genre.pipe'
import {MusicItemService } from './music-item.service';
@Component({
  selector: 'music-list',
  inputs: ['MusicList'],
  pipes:[GenrePipe],
  template:  `
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">View All</option>
  <option value="rock">View Rock</option>
  <option value="rap">View Rap</option>
  <option value="pop">View Pop</option>

  </select>
  <div *ngFor="#currentMusic of MusicList | genre:selectedGenre" (click)="MusicClicked(currentMusic)"
    [class.selected]="currentMusic === selectedMusic">
  <h3>{{currentMusic.artist}} | {{currentMusic.year}}  | {{currentMusic.genre}} | {{currentMusic.price| currency:"USD":true:"1.2-4"}} </h3>
  <form class="listOfMusic" *ngIf="currentMusic === selectedMusic">
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
  public selectedGenre:string;
  constructor(private musicItemService:MusicItemService){}
  MusicClicked(currentMusic:Music):void{
    this.selectedMusic=currentMusic;
  }

  onChange(optionFromMenu) {
  this.selectedGenre = optionFromMenu;
}
ngOnInit(optionFromMenu) {
this.MusicList = this.musicItemService.get();
}
}
