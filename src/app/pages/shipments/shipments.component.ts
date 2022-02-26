import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {

  shipmentStatusIdx: number = 0;
  shipmentStatus: { name: string; value: number }[] = [
    { name: 'Ready For Shipment', value: 0 },
    { name: 'In-Transit', value: 1 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
