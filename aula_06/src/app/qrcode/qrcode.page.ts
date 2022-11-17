import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.postRequest().subscribe(token => {

    })
  }

}
