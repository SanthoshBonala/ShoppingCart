import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private selectedpayment: String = null
  private payments: String[] = ['Card1', 'Card2', 'Card3']
  private gngtoaddnew: Boolean = false
  constructor(private router: Router) { }

  ngOnInit() { }

  addnewcard(){
    this.gngtoaddnew = true
    console.log(this.gngtoaddnew)
  }
  gotoreview () {
    this.router.navigate(['review'])
  }
}
