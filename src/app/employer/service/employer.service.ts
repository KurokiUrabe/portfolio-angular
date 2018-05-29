import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MessageService } from "../message/message.service";
import { Apollo } from "apollo-angular";
import { Employer, Query } from "../../types";
import { map } from "rxjs/operators";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class EmployerService {
  constructor(
    private employerService: EmployerService,
    private apollo: Apollo,
    private messageService: MessageService
  ) {}
  public getEmployers(): Observable<Employer[]> {
    this.messageService.add("HeroService: fetched heroes");
    return this.apollo
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
}
