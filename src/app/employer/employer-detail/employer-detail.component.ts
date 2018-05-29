import { Component, OnInit, Input } from "@angular/core";
import { Employer, Query } from "../../types";

@Component({
  selector: "app-employer-detail",
  templateUrl: "./employer-detail.component.html",
  styleUrls: ["./employer-detail.component.css"]
})
export class EmployerDetailComponent implements OnInit {
  @Input() employer: Employer;

  constructor() {}
  ngOnInit() {}
}
