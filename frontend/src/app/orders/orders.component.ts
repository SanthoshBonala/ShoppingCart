import { Component, OnInit } from '@angular/core';
import { DialogService } from '../services/dialog/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private dialog: DialogService, private router: Router) { }

  ngOnInit() {  }

  onDelete () {
    this.dialog.opendeletedialog()
  }
  checkout () {
    this.router.navigate(["checkout"])
  }
}
