import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { PerfilComponent } from './perfil/perfil.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor(private modal: MatDialog){}

  abrirModal(val: number){
    this.modal.open(ModalComponent, {
      data: {value: val},
      width: '47vw'
    })
  }

  verPerfil(){
    this.modal.open(PerfilComponent,{
      width: '47vw'
    })
  }

}
