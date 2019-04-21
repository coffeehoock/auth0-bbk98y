import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html"
})
export class AccountComponent implements OnInit {
  profile: any;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.userProfile$.subscribe(data => {
      if (data) {
        this.profile = { ...data };
      }
    });
  }
}
