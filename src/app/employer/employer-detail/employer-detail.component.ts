import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NgModule, Component, OnInit, Input } from "@angular/core";

import { Employer } from "../../types";
import { EmployerService } from "../service/employer.service";
import {
  MatFormField,
  MatInputModule,
  MatSelectModule
} from "@angular/material";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  exports: [MatInputModule, MatSelectModule, BrowserAnimationsModule]
})
@Component({
  selector: "app-employer-detail",
  templateUrl: "./employer-detail.component.html",
  styleUrls: ["./employer-detail.component.css"]
})
export class EmployerDetailComponent implements OnInit {
  employer: Employer;
  foods = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private employerService: EmployerService
  ) {}
  ngOnInit() {
    this.getEmployer();
  }

  getEmployer(): void {
    console.log(this.employer);
    const id = this.route.snapshot.paramMap.get("id");
    this.employerService.getEmployer(id).subscribe(employer => {
      this.employer = employer;
    });
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    console.log("esae ", this.employer);
    this.employerService
      .updateEmployer(this.employer)
      .subscribe(() => this.goBack());
  }
}
