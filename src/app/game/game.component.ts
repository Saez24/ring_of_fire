import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game = new Game();

  cardlist = [
    {
      name: "Cover",
      img: "card_cover.png"      
    }
  ];

  playerList = [];

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      if (this.currentCard) { // Ensure currentCard is not undefined
        this.pickCardAnimation = true;
        console.log('New Card: ' + this.currentCard);
        console.log('This Game: ', this.game);

        setTimeout(() => {
          if (this.currentCard) { // Ensure currentCard is not undefined
            this.game.playedCard.push(this.currentCard);
          }
          this.pickCardAnimation = false;
        }, 1000);
      }
    }
  }
}
