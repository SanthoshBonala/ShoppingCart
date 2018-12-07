import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataservice/dataservice.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  orders = [];
  ngOnInit() {

    let token;
    if(localStorage.getItem('role') == 'admin'){
      token = localStorage.getItem('userid')
    }else{
      token = localStorage.getItem('id')
    }

    this.dataservice
    .getorderforuser(token)
    .subscribe(res =>{
      console.log(res)
      this.orders = res
    })
  }

}
