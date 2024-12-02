import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {

  constructor(
    public helper: HelperService,
    private location: Location,
  ) { }

  ngOnInit() {
  } 

  goBack() {
    this.location.back();
  }

}
