import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://bakesbybrownsugar.com/wp-content/uploads/2023/01/Cherry-Pie-Bars-3.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://bakesbybrownsugar.com/wp-content/uploads/2023/01/Cherry-Pie-Bars-3.jpg')
      ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}