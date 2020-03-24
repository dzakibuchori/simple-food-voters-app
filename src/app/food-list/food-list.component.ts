import { foods } from './../foods';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods = foods;

  constructor() { }

  ngOnInit() {
  }

  removeFood(id: number) {
    const index = this.foods.findIndex(food => food.id === id);
    this.foods.splice(index, 1);
  }

  upFood(id: number) {
    const index = this.foods.findIndex(food => food.id === id);
    this.foods[index].vote += 1;
  }

  downFood(id: number) {
    const index = this.foods.findIndex(food => food.id === id);
    this.foods[index].vote -= 1;
  }

  rightFootImgUrl(id: number, ) {
    const index = this.foods.findIndex(food => food.id === id);
    (this.foods[index].img_id < 3) ? this.foods[index].img_id += 1 : alert('you reach the max!');
  }

  leftFootImgUrl(id: number) {
    const index = this.foods.findIndex(food => food.id === id);
    (this.foods[index].img_id > 1) ? this.foods[index].img_id -= 1 : alert('you reach the minimum!');
  }

}
