import { Music } from './music.model'
export class MusicItemService{
  get(){
    return this.musicItems;
  }
  add(musicItem){
    this.musicItems.push(musicItem);
  }
  delete(MusicId){
    for(var i =0;i<this.musicItems.length;i++){
      if(this.musicItems[i].id===MusicId){
          this.musicItems.splice(i,1)
      }
    }
  }
  musicItems=[
        new Music("Miller",2013, "rock", 21, 0),
        new Music("Guiness",2013, "rock", 21, 1),
        new Music("Shocktop",2013, "rock", 21, 2),
        new Music("Ocktoberfest",2013, "rap", 21, 3),
        new Music("Corona",2013, "pop", 21, 4)
      ];
}
