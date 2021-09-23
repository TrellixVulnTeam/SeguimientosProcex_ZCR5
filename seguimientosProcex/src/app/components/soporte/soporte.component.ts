import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login/login.service'
import { SoportesService } from '../../services/soportes/soportes.service'
// import { saveAs } from 'file-saver'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {
  Hemofilia: any
  nombre_archivo: string
  soporte: any
  tipo_archivo = '';
  private ID_GESTION_SEGUIMIENTO;
  usuario: string
  file: File;
  nombrearchivo: string
  Tipoarchivo = '';
  nombreArchivo = '';
  tipoArchivo = '';
  Anulado = '';
  rows = 10;
  page = 0;
  totalRecords
  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private loginservice: LoginService, activateRoute: ActivatedRoute,private SoporteService:SoportesService ) {
    config.backdrop = 'static';
    config.keyboard = false; this.usuario = this.loginservice.getCurrentUser(); this.ID_GESTION_SEGUIMIENTO = activateRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.cargarsoporte();
    this.cargarNumeroRegistros();
  }

  cargarsoporte() {
    this.SoporteService.Cargarsoportes(this.nombreArchivo, this.tipoArchivo,this.ID_GESTION_SEGUIMIENTO,this.page, this.rows).subscribe(res => {
      this.soporte = res;
      console.log(this.soporte)
    })
  }

  cargarNumeroRegistros() {
    // this.soporteservice.numeroRegistro(this.CC).subscribe(res => {
    //   this.totalRecords = res;
    // })
  }

  open(content: any) {
    this.modalService.open(content);
  }


  onphotoselected(event: any): void {
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
    this.Guargarsoporte();
  }

  Guargarsoporte() {
    this.SoporteService.Guardarsoporte(this.nombrearchivo ,this.tipo_archivo, this.usuario, this.ID_GESTION_SEGUIMIENTO, this.file).subscribe(res => {
      console.log(res)
      Swal.fire({
        title: 'Almacenado!',
        text: 'Archivo cargado',
        icon: 'success',
        allowOutsideClick: false
      }
      ).then((result) => {
        if (result.value) {
          this.cargarsoporte();
          this.modalService.dismissAll();
        }
      })
    })
  }

  Descargarsoporte(PKId: string) {
    // console.log(PKId)
    // console.log('descarga')
    // for (let i = 0; i < this.soporte.length; i++) {
    //   if (PKId == this.soporte[i].PKId) {
    //     const ruta = 'http://localhost:3000/' + this.soporte[i].Ruta_soporte
    //     console.log(ruta)
    //     saveAs(ruta)
    //   }
    // }

  }
  paginador(event) {
    console.log(event);
    this.rows = event.rows;
    this.page = event.page;
    this.cargarsoporte();
  }

}
