import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-active-game',
  templateUrl: './active-game.component.html',
  styleUrls: ['./active-game.component.scss'],
})
export class ActiveGameComponent {
  currentPlayer: string = 'X';
  isActiveGame = true;
  user$ = this.authService.user$;
  board: any[] = ['', '', '', '', '', '', '', '', ''];
  gameStatus: string = '';
  winner: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.resetGame();
  }

  makeMove(index: number) {
    if (this.board[index] === '') {
      this.board[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.gameStatus = this.calculateGameStatus();
    }
    this.winner = this.calculateGameStatus();
  }

  calculateGameStatus(): string {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        this.board[a] !== '' &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return `${this.board[a]} wins!`;
      }
    }

    if (this.board.includes('')) {
      return `It's ${this.currentPlayer}'s turn.`;
    } else {
      return 'The game is a tie!';
    }
  }

  resetGame() {
    this.currentPlayer = 'X';
    this.gameStatus = '';
    this.board = ['', '', '', '', '', '', '', '', ''];
  }
}
