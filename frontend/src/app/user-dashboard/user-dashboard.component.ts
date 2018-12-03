import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogService } from '../services/dialog/dialog.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

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
