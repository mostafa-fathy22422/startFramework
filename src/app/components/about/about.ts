import {Component} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';

@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  faStar = faStar;


  constructor() {
  }
}
