import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private dialog: MatDialogRef<ProductComponent>) { }

  ngOnInit() { }

  onSubmit () {
    this.dialog.close()
  }

}
