import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from "@models/User";
import { faHeart, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  logoutIcon = faSignOutAlt;
  heartIcon = faHeart;
  showMenu = false;

  @Input() user: User | any;

  @Output() logout = new EventEmitter<boolean>();

  onLogout() {
    this.logout.emit(true);
  }

  show() {
    this.showMenu = !this.showMenu;
  }

}
