import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message:string = "X";
  mark:string ="X";
  games:string[] = [];
  moves:any = [];
  gameOver: boolean = false;

  newGame(){
  this.message = "X";
  this.mark ="X";
  this.gameOver = false;
  this.games = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""];
  }

  setMark(index : number){
    if (this.games[index] == "") 
    {
      this.games[index] = this.mark;
    this.moves.push([...this.games]);
    this.isGameOver();
    if (this.gameOver) {
      this.message = "kazanan:" + this.mark
    }else{
      if (this.mark=="X")this.mark = "O"
      else this.mark= "X"
      this.message = this.mark;
    }
  }
}

  returnSelectMove(index : number){
    this.games= this.moves[index];
  }

  isGameOver() {
    if (
      (this.games[0] !== "" && this.games[0] === this.games[1] && this.games[0] === this.games[2]) ||
      (this.games[3] !== "" && this.games[3] === this.games[4] && this.games[3] === this.games[5]) ||
      (this.games[6] !== "" && this.games[6] === this.games[7] && this.games[6] === this.games[8]) ||
      (this.games[0] !== "" && this.games[0] === this.games[3] && this.games[0] === this.games[6]) ||
      (this.games[1] !== "" && this.games[1] === this.games[4] && this.games[1] === this.games[7]) ||
      (this.games[2] !== "" && this.games[2] === this.games[5] && this.games[2] === this.games[8]) ||
      (this.games[0] !== "" && this.games[0] === this.games[4] && this.games[0] === this.games[8]) ||
      (this.games[2] !== "" && this.games[2] === this.games[4] && this.games[2] === this.games[6])
    ) {
      this.gameOver = true;
    }
  }
  
}
