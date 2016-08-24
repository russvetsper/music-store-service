export class Music {
  public soldOut : boolean = false;
  public imageUrl : string = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZakp7-8zmYkpPhphJW4t7NTfBVpDImYofe3rtanJujhXLgbK-Fw";

  constructor(public artist : string, public year : number, public genre: string, public price: number, public id : number) {

  }
}
