import { Component, Input, OnChanges } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    {
      name: "Ass",
      description: "Wenn du diese Karte ziehst, musst du einen Schluck aus deinem Becher trinken und die anderen Spieler im Uhrzeigersinn nacheinander ebenfalls."
    },
    {
      name: "Zwei",
      description: "Du darfst bestimmen, welcher Spieler etwas trinken bzw. seinen Becher leer trinken muss."
    },
    {
      name: "Drei",
      description: "Du musst selbst trinken."
    },
    {
      name: "Vier",
      description: "Alle weiblichen Mitspieler müssen trinken."
    },
    {
      name: "Fünf",
      description: "Du wirst zum Thumbmaster und musst deinen Daumen auf den Tisch bzw. die Spielfläche legen. Auch alle anderen Spieler müssen dies tun und wer zuletzt reagiert, muss trinken."
    },
    {
      name: "Sechs",
      description: "Alle männlichen Mitspieler müssen trinken."
    },
    {
      name: "Sieben",
      description: "Du musst dich wie in der Schule melden. Auch deine Mitspieler müssen das und wer als letztes reagiert, muss trinken."
    },
    {
      name: "Acht",
      description: "Du musst einen weiblichen Mitspieler aussuchen, der immer gemeinsam mit dir trinken muss. Bist du weiblich, musst du einen männlichen Mitspieler aussuchen."
    },
    {
      name: "Neun",
      description: "Du sagst ein alltägliches Wort und im Uhrzeigersinn muss jeder Mitspieler ein sich darauf reimendes Wort sagen. Wer zu lange braucht oder keins findet, muss trinken."
    },
    {
      name: "Zehn",
      description: "Falls du diese Karte ziehst, nennst du eine Marke (z.B. Automarke: BMW) und der Reihenfolge nach muss jeder Mitspieler ebenfalls eine Marke aus der gleichen Kategorie (z.B. Audi) nennen. Wer zu lange braucht oder das nicht schafft, muss trinken."
    },
    {
      name: "Bube",
      description: "Hast du diese Karte gezogen, darfst du dir eine neue Regel ausdenken, wann, ob, wie oder wie viel getrunken werden muss. Wer die Regel nicht befolgt – muss trinken. Diese kommt dann zu den bereits vorhandenen Ringe of Fire Regeln hinzu."
    },
    {
      name: "Dame",
      description: "Mit dir darf niemand reden, bis jemand anderes eine Königin gezogen hat. Wer doch mit dir redet, muss trinken."
    },
    {
      name: "König",
      description: "Wenn du diese Karte gezogen hast, schüttest du deinen Becherinhalt in das Glas in der Mitte. Wer den letzten im Spiel befindlichen König zieht, muss dieses Glas austrinken. Prost!"
    }
  ];
  
  name = "";
  description = "";
  @Input() card!: string;

  ngOnChanges(): void {
    if (this.card) {
    let cardNumber = +this.card.split('_')[1];
    this.name = this.cardAction[cardNumber - 1].name;
    this.description = this.cardAction[cardNumber - 1].description;
    }
    }

}
