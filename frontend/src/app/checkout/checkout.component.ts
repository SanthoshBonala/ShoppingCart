import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private selectedaddress: String = null
  private addresses: String[] = ['Address1', 'Address2', 'Address3', 'Address4' ]
  private isaddress: Boolean = false
  private selectedpayment: String = null
  private payments: String[] = ['Card1', 'Card2', 'Card3']
  private gngtoaddnew: Boolean = false
  constructor(private router: Router) { }

  ngOnInit() { }

  addaddress(){
    this.isaddress = true
    console.log(this.isaddress)
  }
  addnewcard(){
    this.gngtoaddnew = true
    console.log(this.gngtoaddnew)
  }
}
