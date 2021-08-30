import { Component, OnInit } from '@angular/core';

export interface Transfer {
  id: string;
  name: string;
}

const TRANSFERS = [
  {id: '1', name: 'One'},
  {id: '2', name: 'Two'},
  {id: '3', name: 'Three'}  
]

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {

  selectedTransfer: Transfer;
  transfers: Transfer[];

  constructor() { }

  ngOnInit() {
    this.transfers = TRANSFERS;
  }

  printTransfer(id: string){
    this.selectedTransfer = TRANSFERS.find((value) => value.id == id);
    window.print();
  }

}