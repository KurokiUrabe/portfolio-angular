import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { MessageService } from "../message/message.service";
import { Apollo } from "apollo-angular";
import { Employer, Query } from "../../types";
import { catchError, map, tap } from "rxjs/operators";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class EmployerService {
  public employer: Observable<Employer>;
  constructor(
    private employerService: EmployerService,
    private apollo: Apollo,
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  public getEmployers(): Observable<Employer[]> {
    this.messageService.add("EmployerService: fetched heroes");
    return this.apollo
      .watchQuery<Query>({
        query: gql`
          {
            allEmployers {
              _id
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
      .valueChanges.pipe(
        map(result => result.data.allEmployers),
        tap(employer => this.log(`fetched employer`)),
        catchError(this.handleError("getEmployer", []))
      );
  }

  public getEmployer(id: string): Observable<Employer> {
    this.messageService.add(`EmployerService: fetched hero id=${id}`);

    return this.apollo
      .watchQuery<Query>({
        query: gql`
        {
          getEmployer(_id: "${id}") {
            _id
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
      .valueChanges.pipe(
        map(result => result.data.getEmployer),
        tap(employer => this.log(`fetched employer`))
        // catchError(this.handleError("getEmployer", []))
      );
  }

  public updateEmployer(employer: Employer) {
    return this.apollo.mutate<Query>({
      mutation: gql`
      mutation{
        updateEmployer(dataEmployer:{
          _id:"${employer._id}"
          jobTitle : "${employer.jobTitle}s"
          company : "${employer.company}"
          description : "${employer.description}"
          period : {
            start : "${employer.period.start}"
            end : "${employer.period.end}"
          }
        })
          {
          _id
          jobTitle
          company
          description
          period{
            start
            end
          }
        }
      }
      `
    });
  }
  public addEmployer(employer: Employer) {
    return this.apollo
      .mutate<Query>({
        mutation: gql`
      mutation{
        createEmployer(dataEmployer:{
          jobTitle : "${employer.jobTitle}"
          company : "${employer.company}"
          description : "${employer.description}"
          period : {
            start : "${employer.period.start}"
            end : "${employer.period.end}"
          }
        })
          {
          _id
          jobTitle
          company
          description
          period{
            start
            end
          }
        }
      }
      `
      })
      .subscribe(
        ({ data }) => {
          console.log("got data", data);
        },
        error => {
          console.log("there was an error sending the query", error);
        }
      );
  }
  private log(message: string) {
    this.messageService.add("EmployerService: " + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
