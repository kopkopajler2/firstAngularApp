import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})
//Here i use the data binding from my interface and force a type.
export class HousingLocationComponent {
  @Input() housingLocation! : HousingLocation;

}
