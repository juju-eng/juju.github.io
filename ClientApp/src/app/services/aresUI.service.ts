import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from '../services/environment-url.service';
import { Auth } from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class AresUIService {

  static headers = new HttpHeaders().append('Authorization', 'Bearer ' + Auth.currentSession().then(user => user.getIdToken().getJwtToken())).append('CE-Application', 'ARES');  

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  getPortfolios() {
    //Auth.currentSession().then(user => {
    //  console.log(user.getIdToken().getJwtToken());
    //});
    return this.http.get(this.envUrl.urlAddress + '/api/Portfolios', { 'headers': AresUIService.headers});
  }

  getScenarios(portfolioId) {
    return this.http.get(this.envUrl.urlAddress + '/api/Portfolio/' + portfolioId + '/Scenarios', { 'headers': AresUIService.headers });
  }

  getProperties(scenarioId) {
    return this.http.get(this.envUrl.urlAddress + '/api/Scenario/' + scenarioId + '/Properties', { 'headers': AresUIService.headers });
  }
}
