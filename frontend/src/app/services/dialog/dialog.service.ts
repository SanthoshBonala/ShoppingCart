import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatConfirmDialogComponent } from 'src/app/mat-confirm-dialog/mat-confirm-dialog.component';
import { ProductComponent } from 'src/app/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  opendeletedialog () {
    this.dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      position: { top: "10%" },
      data :{
        message : "Are you sure to delete this record ?"
      }
    })
  }

  openEditDialog () {
    this.dialog.open(ProductComponent, {
      width: '40%',
      height: '70%',
      position: { top: "10%" }
    })
  }
}
