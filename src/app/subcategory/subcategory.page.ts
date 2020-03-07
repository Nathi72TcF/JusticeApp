import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {

  id;
  Categories = [
    {id: 'conLaw', name: 'Contract Law', pic: 'contactLaw.PNG'},
    {id: 'TdLw', name: 'Tort Law', pic: 'TodLow.jpg'},
    {id: 'prpry', name: 'Property Law', pic: 'propertylaw.jpg'},
    {id: 'FamLaw', name: 'Family Law', pic: 'FamilyLaw.jpg'},
  ]

  constructor(
    public activatedRoute: ActivatedRoute,
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit() {
  }

}
