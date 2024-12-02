import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent  implements OnInit {
  @Input() options: any[] = [];
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  selectItem(item: any) {
    this.popoverController.dismiss(item); // Dismiss and return selected item
  }
}
