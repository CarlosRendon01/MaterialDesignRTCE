import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './chips.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {

}