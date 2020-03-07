import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lingos;
  Observationmethod;

  Categories = [
    {id: 'CVLL', name: 'Civil Law', pic: 'Civil-Law.jpg'},
    {id: 'CRLL', name: 'Criminal Law', pic: 'criminal-law.jpg'},
    {id: 'STRR', name: 'Statute Law', pic: 'statu.jpg'},
    {id: 'CMML', name: 'Common Law', pic: 'common.jpg'},
    {id: 'CVLL', name: 'Equity Law', pic: 'Civil-Law.jpg'},
    {id: 'CRLL', name: 'Admiministrative Law', pic: 'criminal-law.jpg'},
    {id: 'STRR', name: 'Enviromental Law', pic: 'statu.jpg'},
    {id: 'CMML', name: 'Health Law', pic: 'common.jpg'},
  ]

  constructor(
    private router: Router,
  ) {}

  Observationmethodz(event) {
    if (event.detail.value = 0) {
      this.router.navigate(['/home']);
    } else if (event.detail.value = 1) {
      this.router.navigate(['/home2']);
    }
    console.log(this.Observationmethod);
  }

}
