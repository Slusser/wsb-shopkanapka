import { Routes } from "@angular/router";
import { SandwichFormComponent } from "./sandwich-form/sandwich-form.component";
import { SandwichListComponent } from "./sandwich-list/sandwich-list.component";
//export const sandwichRoutes: Route[]=
export const sandwichRoutes: Routes=[
{path: 'sandwich', component: SandwichListComponent},
{path: 'sandwiches/form', component: SandwichFormComponent},
{path: 'sandwiches/:sandwichId', component:SandwichListComponent}
]