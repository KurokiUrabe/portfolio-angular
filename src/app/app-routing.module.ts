import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployerComponent } from "./employer/employer.component";
import { EmployerDetailComponent } from "./employer/employer-detail/employer-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "employer_detail/:id", component: EmployerDetailComponent },
  { path: "employer", component: EmployerComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
