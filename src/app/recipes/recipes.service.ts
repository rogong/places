import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

 private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'http://dev.vacbc.ca/wp-content/uploads/2018/05/vancouver-alpen-club-food-schnitzel-gallery.jpg',
      ingrdients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
     id: 'r2',
     title: 'Spaghetti',
     imageUrl: 'https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg',
     ingrdients: ['Spaghetti', 'Meat', 'Tomatoes']
   }
 ];
  constructor() { }

  getAllRecipes() {
     return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
