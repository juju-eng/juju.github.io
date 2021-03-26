import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  username = '';
  password = '';
  hide = true;
  successLoggedIn;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    //window.location.assign("https://cecloudapi.auth.us-east-2.amazoncognito.com/login?client_id=7s0s37egm18e0ub606lgv0dg3d&response_type=code&scope=email+openid+profile&redirect_uri=https://localhost:5001/signin-oidc");
  }

  onSubmit(form: FormGroup) {
    if (this.loginForm.valid) {
      //this.authService.signIn(form.get('username').value, form.get('password').value).then(user =>
      //  this.router.navigate(['/reportpage']), () => this.successLoggedIn = false)

      //    .catch(() => {
      //      this.successLoggedIn = false;
      //      //this.router.navigate(['/']);
      //    });
    }
  }
}
