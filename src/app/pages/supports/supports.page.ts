import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-supports',
  templateUrl: './supports.page.html',
  styleUrls: ['./supports.page.scss'],
})
export class SupportsPage implements OnInit {

  constructor(
    public helper: HelperService,
    private location: Location,
  ) { }

  ngOnInit() {
  } 

  goBack() {
    this.location.back();
  }

  sendMessage() {

  }

}
