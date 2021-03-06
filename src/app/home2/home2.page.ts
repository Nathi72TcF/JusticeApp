import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  lingos;
  Observationmethod;

  Categories = [
    {id: 'CVLL', name: 'Umthetho Wezomphakathi', pic: 'Civil-Law.jpg'},
    {id: 'CRLL', name: 'Umthetho Wobugebengu', pic: 'criminal-law.jpg'},
    {id: 'STRR', name: 'Umthetho Umthetho', pic: 'statu.jpg'},
    {id: 'CMML', name: 'Umthetho Wesitatimende', pic: 'common.jpg'},
    {id: 'CVLL', name: 'Umthetho Womnotho', pic: 'Civil-Law.jpg'},
    {id: 'CRLL', name: 'Umthetho Wokulingana', pic: 'criminal-law.jpg'},
    {id: 'STRR', name: 'Umthetho Wezemvelo', pic: 'statu.jpg'},
    {id: 'CMML', name: 'Umthetho Wezempilo', pic: 'common.jpg'},
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  Observationmethodz(event) {
    if (event.detail.value = '0') {
      this.router.navigate(['/home']);
    } else if (event.detail.value = '1') {
      this.router.navigate(['/home2']);
    }
    console.log(this.Observationmethod);
  }

}
