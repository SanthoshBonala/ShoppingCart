import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { DialogService } from '../services/dialog/dialog.service';
import { DataService } from '../services/dataservice/dataservice.service';
import { Product } from '../models/product.model';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: Product[]
  imageurl = "http://localhost:3000/image?_id="
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private dialogservice: DialogService,
    private dataservice: DataService,
    private ns: NotificationService) {
    iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit.svg'))
    iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete.svg'))
  }

  ngOnInit() {
    this.dataservice
    .getData()
    .subscribe(
      res => {
        this.data = res
      }
    )
  }

  onDelete(productid){
    this.dialogservice
    .opendeletedialog()
    .afterClosed()
    .subscribe(res =>{
      if(res){
        this.dataservice
        .deleteproduct(productid)
        .subscribe(res => {
          this.ngOnInit()
          this.ns.warn(res)
        })
      }
    })
  }
  onEdit(product: Product){
   // console.log(product)
    this.dialogservice
    .openEditDialog(product)
  }

  oncreate(){
    this.dialogservice
    .opencreateproduct()
    .afterClosed()
    .subscribe(
      res => {
        this.dataservice
        .addproduct(res)
        .subscribe(
          res => {
            this.ns.success(res)
            this.ngOnInit()
          })
      }
    )
  }
}
