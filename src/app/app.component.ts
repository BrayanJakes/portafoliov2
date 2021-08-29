import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ResponsiveService } from './responsive.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor(private modal: MatDialog,
              public responsive: ResponsiveService){}

  abrirModal(val: number){
    this.modal.open(ModalComponent, {
      data: {value: val},
      width: this.responsive.responsiveStatus !== 1 ? '47vw' : '94vw'
    })
  }

  verPerfil(){
    this.modal.open(PerfilComponent,{
      width: this.responsive.responsiveStatus !== 1 ? '47vw' : '94vw'
    })
  }

}
