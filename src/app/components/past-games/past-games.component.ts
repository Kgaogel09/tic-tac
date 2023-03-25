import { Component } from '@angular/core';

interface Player {
  playerName: string;
  isWinner: boolean;
}

interface Game {
  players: Player[];
}

@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.scss'],
})
export class PastGamesComponent {
  pastGames = localStorage.getItem('games');
  games: Game[] = this.pastGames ? JSON.parse(this.pastGames) : [];
}
