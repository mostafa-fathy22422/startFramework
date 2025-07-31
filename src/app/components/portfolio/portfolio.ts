import {Component} from '@angular/core';
import {IProduct} from '../../iproduct';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

@Component({
  selector: 'app-portfolio',
  imports: [FontAwesomeModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  displayProduct: boolean = true;
  productUrl: string = '';
  products: IProduct[] = [
    {
      id: 1,
      imgUrl: 'images/port1.png'
    },
    {
      id: 2,
      imgUrl: 'images/port2.png'
    },
    {
      id: 3,
      imgUrl: 'images/port3.png'
    },
    {
      id: 4,
      imgUrl: 'images/port2.png'
    },
    {
      id: 5,
      imgUrl: 'images/port1.png'
    },
    {
      id: 6,
      imgUrl: 'images/port3.png'
    }
  ]
  faPlus = faPlus;

  showProduct(productUrl: string): void {
    this.displayProduct = false;
    this.productUrl = productUrl;
  }

  hideProduct(): void {
    this.displayProduct = true;
    this.productUrl = '';
  }
}
