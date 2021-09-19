import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService],
})
export class RecipesComponent implements OnInit {
  // selcted: boolean = false;
  theSelectedRecipe: Recipe;
  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      console.log('recipes');
      console.log(recipe);

      this.theSelectedRecipe = recipe;
    });
  }

  // onSelectFromList(recipe: Recipe) {
  //   this.selcted = true;
  //   this.theSelectedRecipe = recipe;
  // }
}
