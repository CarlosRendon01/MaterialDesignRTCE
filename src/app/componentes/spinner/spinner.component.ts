import {Component} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class SpinnerComponent {}
