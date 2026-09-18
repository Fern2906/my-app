import { Component, input, output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  user = input.required<User>();
  deleteUser = output<number>();

  onDelete() {
    this.deleteUser.emit(this.user().id);
  }
}
