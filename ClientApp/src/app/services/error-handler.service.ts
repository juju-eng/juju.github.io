import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  public errorMessage: string = '';

  constructor(private router: Router) { }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 500) {
      this.createErrorMessage(error);
      //this.router.navigate(['/500']);
    }
    else if (error.status === 404) {
      this.createErrorMessage(error);
      //this.router.navigate(['/404']);
    }
    else {
      this.createErrorMessage(error);
    //TODO: this will be fixed later;
    }
  }

  private createErrorMessage(error: HttpErrorResponse) {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
