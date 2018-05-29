// eviorement
import { environment } from "../environments/environment";
// dependencies
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
//Modules
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { EmployerComponent } from "./employer/employer.component";
import { EmployerDetailComponent } from "./employer/employer-detail/employer-detail.component";
import { MessageComponent } from "./employer/message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EmployerComponent,
    EmployerDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // provides HttpClient for HttpLink
    HttpLinkModule,
    ApolloModule,
    FormsModule // ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: environment.URI }),
      cache: new InMemoryCache()
    });
  }
}
