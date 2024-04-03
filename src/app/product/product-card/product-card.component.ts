import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);
  }
}
