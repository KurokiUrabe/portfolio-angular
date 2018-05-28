import { Component, OnInit } from "@angular/core";
import { Profile } from "../profile";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profile: Profile = {
    picture:
      "https://media.licdn.com/dms/image/C4E03AQG_G60mT4EAWg/profile-displayphoto-shrink_200_200/0?e=1532563200&v=beta&t=cwqOd_rDxJxEIEYYu_i-uW95I7PFuvdLs08mc1H_qH4",
    name: "Manuel Heredia",
    nickname: "kurabe",
    bio: "coder",
    sumary: "Soy un gran chef",
    email: "arkangel.exe@gmail.com",
    city: "Morelia",
    state: "Michoacan",
    portfolio: "https://github.com/KurokiUrabe"
  };

  constructor() {}

  ngOnInit() {}
}
