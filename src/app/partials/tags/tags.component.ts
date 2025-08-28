import { Component } from '@angular/core';
import { tag } from '../../shared/models/tag';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent {
      tags?:tag[];
      constructor(private foodService:FoodService){
        this.tags=this.foodService.getAllTags();
      }

}
