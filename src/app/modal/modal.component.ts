import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalimgComponent } from '../modalimg/modalimg.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  value = 0;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private modal: MatDialog) { }

  ngOnInit(): void {
    this.value = this.data.value
  }


  abrirModal(img: string){
    this.modal.open(ModalimgComponent, {
      data: {img}
    })
  }


}
