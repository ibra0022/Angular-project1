import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() theRecipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  onAddToShoppongList() {
    this.recipeService.addToShoppingList(this.theRecipe.ingredients);
  }
}
