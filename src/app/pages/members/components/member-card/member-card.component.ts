import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from "@models/User";
import { faComment, faHeart, faMapMarkerAlt, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberCardComponent {
  @Input() user: User;

  locationIcon = faMapMarkerAlt;
  sendIcon = faComment;
  loveIcon = faHeart;
}
