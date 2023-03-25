import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

enum Players {
  'X' = 'player1',
  'O' = 'player2',
}

interface Player {
  playerName: string;
  isWinner: boolean;
}

interface Game {
  players: Player[];
}
@Component({
  selector: 'app-active-game',
  templateUrl: './active-game.component.html',
  styleUrls: ['./active-game.component.scss'],
})
export class ActiveGameComponent {
  squares: any;
  xIsNext: any;
  winner: string;
  storedPlayer2 = localStorage.getItem('player2');
  pastGames = localStorage.getItem('games');
  activePlayers = {
    player1: '',
    player2: this.storedPlayer2 ? JSON.parse(this.storedPlayer2) : null,
  };
  games: Game[] = this.pastGames ? JSON.parse(this.pastGames) : [];

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe((user) => {
      this.activePlayers.player1 = user?.displayName;
    });
  }

  ngOnInit() {
    this.newGame();
  }

  getCurrentPlayer(player) {
    return this.activePlayers[Players[player]];
  }

  newGame() {
    this.winner = '';
    this.squares = Array(9).fill(null);
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  getLoser(winner) {
    return winner === 'X' ? 'O' : 'X';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if (this.winner) {
      const game: Game = {
        players: [
          {
            playerName: this.getCurrentPlayer(this.winner),
            isWinner: true,
          },
          {
            playerName: this.getCurrentPlayer(this.getLoser(this.winner)),
            isWinner: false,
          },
        ],
      };
      this.games.push(game);
      localStorage.setItem('games', JSON.stringify(this.games));
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
