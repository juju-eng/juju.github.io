import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AresUIService } from '../services/aresUI.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
declare var $: any;


@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  AssetSummary: FormGroup;
  portfolios = [];
  scenarios = [];
  properties = [];
  propertyDataSource : MatTableDataSource<any>;
  displayedColumns: string[] = ['select', 'externalID', 'name'];
  selectedProperties = new SelectionModel<any>(true, []);
  processing = false; /*true*/
  public errorMessage: string = '';

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private fb: FormBuilder, private aresUISvc: AresUIService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {    
    this.aresUISvc.getPortfolios().subscribe((data: any[]) => {
      this.processing = true;
      console.log(data);
      this.portfolios = data;
      this.AssetSummary.get('selectedPortfolio').setValue(this.portfolios[0]);
      this.setPortfolio(this.portfolios[0].Key);
    },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      },
      () => { this.processing = false; })
    

    this.AssetSummary = this.fb.group({
      selectedPortfolio: ['', Validators.required],
      selectedScenario: ['', Validators.required],
      reportOptions: [false]
    });
    
  }

  changePortfolio(e) {
    this.processing = true;
    this.setPortfolio(e.value.Key);
    this.processing = false;
  }

  setPortfolio(id) {
    this.aresUISvc.getScenarios(id).subscribe((data: any[]) => {
      this.processing = true;
      console.log(data);
      this.scenarios = data;

      //this.AssetSummary.reset({ selectedScenario:''});
      this.AssetSummary.get('selectedScenario').setValue('');
      if (this.scenarios.length > 0) {
        this.AssetSummary.get('selectedScenario').setValue(this.scenarios[0]);

        this.aresUISvc.getProperties(this.AssetSummary.get('selectedScenario').value.Key).subscribe((data: any[]) => {
          console.log(data);
          this.propertyDataSource = new MatTableDataSource(data);
          this.propertyDataSource.sort = this.sort;
          this.propertyDataSource.filterPredicate = (data, filter) => {
            return (data.name.toLowerCase().indexOf(filter) !== -1 || data.externalID.toLowerCase().indexOf(filter) !== -1);
          };
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          },
          () => { this.processing = false; })
      }
    },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }

  //#region form events
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.propertyDataSource.filter = filterValue.trim().toLowerCase();
  }

  flip() {
    alert($('.select'));
  }
  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selectedProperties.selected.length;
    const numRows = this.propertyDataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selectedProperties.clear() :
      this.propertyDataSource.data.forEach(row => this.selectedProperties.select(row));
  }  

  onSubmit(form: FormGroup) {
    if (this.AssetSummary.valid) {
    }
    console.log(this.AssetSummary.value);
    console.log(this.selectedProperties);
  }
  //#endregion
}
