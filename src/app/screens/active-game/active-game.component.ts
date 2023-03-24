import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-active-game',
  templateUrl: './active-game.component.html',
  styleUrls: ['./active-game.component.scss'],
})
export class ActiveGameComponent {
  user$ = this.authService.user$;

  constructor(private authService: AuthService) {}
}
