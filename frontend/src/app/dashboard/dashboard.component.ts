import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { DialogService } from '../services/dialog/dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private dialogservice: DialogService) {
    iconRegistry.addSvgIcon(
        'edit',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit.svg'))
    iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete.svg'))
  }

  ngOnInit() { }

  onDelete(){
    this.dialogservice.opendeletedialog()
  }
  onEdit(){
    this.dialogservice.openEditDialog()
  }
}
