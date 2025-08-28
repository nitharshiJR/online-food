import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.paramMap.subscribe(paramMap => {
      const searchTerm = paramMap.get('searchTerm'); // string | null
      const tag = paramMap.get('tag');               // string | null

      if (searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(searchTerm);
      } else if (tag) {
        this.foods = this.foodService.getAllFoodsByTag(tag);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }

  ngOnInit(): void {
    // Optional init logic
  }
}
