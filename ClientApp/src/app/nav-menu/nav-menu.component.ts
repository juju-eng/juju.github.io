import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  username:string = "";

  constructor(private router: Router) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.username = user.attributes.email;
        console.log(user.attributes.email);
      })

      .catch(() => {
        console.log("Not signed in");
        this.router.navigate(['/']);
      });
  }

  logout() {
    Auth.signOut().then(user => { this.router.navigate(['/']); })
      .catch(() => console.log("Error trying to sign out."));
  }
}
