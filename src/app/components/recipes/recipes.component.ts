import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selcted: boolean = false;
  theSelectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}

  onSelectFromList(recipe: Recipe) {
    this.selcted = true;
    this.theSelectedRecipe = recipe;
  }
}
