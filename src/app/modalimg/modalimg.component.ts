import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalimg',
  templateUrl: './modalimg.component.html',
  styleUrls: ['./modalimg.component.css']
})
export class ModalimgComponent implements OnInit {

  img = '';

  constructor(public dialogRef: MatDialogRef<ModalimgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.img = this.data.img
  }

}
