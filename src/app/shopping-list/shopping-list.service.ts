import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  getIngredient(index:number) {
    return this.ingredients[index];
  }
  public getIngredients() {
    return this.ingredients.slice();
  }
  public addItem(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice())

  }
}
