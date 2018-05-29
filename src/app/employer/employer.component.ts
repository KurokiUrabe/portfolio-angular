import { Component, OnInit } from "@angular/core";

import { EmployerService } from "./service/employer.service";

import { Employer, Query } from "../types";

@Component({
  selector: "app-employer",
  templateUrl: "./employer.component.html",
  styleUrls: ["./employer.component.css"]
})
export class EmployerComponent implements OnInit {
  selectedEmployer: Employer;
  employers: Employer[];
  constructor(private employerService: EmployerService) {}

  ngOnInit() {
    this.getEmployers();
  }
  getEmployers(): void {
    this.employerService.getEmployers().subscribe(employers => {
      this.employers = employers;
    });
  }
  onSelect(employer: Employer): void {
    this.selectedEmployer = employer;
  }
}
