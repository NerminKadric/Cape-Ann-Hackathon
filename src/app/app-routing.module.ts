import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { FormComponent} from './form/form.component';
import { StatusValidationComponent } from './status-validation/status-validation.component';


const routes: Routes = [

 { 
   path: 'form', component:FormComponent
 },
 {
   path: 'status-validation', component: StatusValidationComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
