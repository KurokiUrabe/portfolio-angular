import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

import gql from "graphql-tag";

import { Employer, Query } from "../types";

@Component({
  selector: "app-employer",
  templateUrl: "./employer.component.html",
  styleUrls: ["./employer.component.css"]
})
export class EmployerComponent implements OnInit {
  selectedEmployer: Employer;

  employers: Observable<Employer[]>;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.employers = this.apollo
      .watchQuery<Query>({
        query: gql`
          query allEmployers {
            allEmployers {
              jobTitle
              company
              description
              period {
                start
                end
              }
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.allEmployers));
  }
  onSelect(employer: Employer): void {
    this.selectedEmployer = employer;
  }
}
