import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient, Sauce } from '../sandwich';

@Component({
  selector: 'wsb-sandwich-form',
  templateUrl: './sandwich-form.component.html',
  styleUrls: ['./sandwich-form.component.css']
})
export class SandwichFormComponent implements OnInit {
  public sandwichForm: FormGroup;

  public showErrors: boolean;

  public sauces = [
    { label: 'no sauce', value: Sauce.None},
    { label: 'Barbaque sauce', value: Sauce.Barbaque},
    { label: 'Hot sauce', value: Sauce.Hot},
    { label: 'Mayonnaise sauce', value: Sauce.Mayo}
  ]


  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.sandwichForm = this.formBuilder.group({
      name: ['',Validators.minLength(5)],
      ingredients: this.formBuilder.group({
        [Ingredient.Lettuce]: false,  //--> lettuce false
        [Ingredient.Tomato]: false,
        [Ingredient.Ham]: false,
        [Ingredient.Chorizo]: false,
        [Ingredient.Cheese]: false
      }),
      sauce: Sauce.None,
      vege: false,
      price: [0, [Validators.min(0), Validators.max(20)]]
    })
  }

  public save():void {
    this.showErrors = true;
    const formValue = this.sandwichForm.getRawValue();

    //sprawdzamy
    console.log(formValue)
  }

}
