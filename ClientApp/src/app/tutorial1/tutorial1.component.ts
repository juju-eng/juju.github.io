import { Component, OnInit } from '@angular/core';
import { AresUIService } from '../services/aresUI.service';
import { ErrorHandlerService } from '../services/error-handler.service';


@Component({
  selector: 'app-tutorial1',
  templateUrl: './tutorial1.component.html',
  styleUrls: ['./tutorial1.component.css']
})
export class Tutorial1Component implements OnInit {

  weathers = [];
  public errorMessage: string = '';

  constructor(private aresUISvc: AresUIService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {

    this.aresUISvc.getPortfolios().subscribe((data: any[]) => {
      console.log(data);
      this.weathers = data;
    },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })  

  }

}
