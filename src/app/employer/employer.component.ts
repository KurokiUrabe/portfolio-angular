import { Component, OnInit } from "@angular/core";

import { EmployerService } from "./service/employer.service";

import { Employer } from "../types";

@Component({
  selector: "app-employer",
  templateUrl: "./employer.component.html",
  styleUrls: ["./employer.component.css"]
})
export class EmployerComponent implements OnInit {
  // selectedEmployer: Employer;
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
  // onSelect(employer: Employer): void {
  //   this.selectedEmployer = employer;
  // }

  add(employer: Employer): void {
    console.log(employer);
    this.trimObjectProperties(employer);
    console.log(employer);

    if (!employer) {
      return;
    }
    this.employerService.addEmployer(employer);
  }
  trimObjectProperties(objectToTrim) {
    for (var key in objectToTrim) {
      if (
        objectToTrim[key].constructor &&
        objectToTrim[key].constructor == Object
      )
        this.trimObjectProperties(objectToTrim[key]);
      else if (objectToTrim[key].trim)
        objectToTrim[key] = objectToTrim[key].trim();
    }
  }
}
