import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/seattle"},
  {path: "seattle", pathMatch: "full", component: SeattleComponent},
  {path: "sanjose", pathMatch: "full", component: SanjoseComponent},
  {path: "chicago", pathMatch: "full", component: ChicagoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
