import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input()
  isPlaying: boolean = false;
  user$ = this.authService.user$;
  constructor(private authService: AuthService) {}
}
