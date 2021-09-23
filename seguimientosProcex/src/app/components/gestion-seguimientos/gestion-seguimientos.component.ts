import { Component, OnInit, Input } from '@angular/core';
import { GestionSeguimientosService } from '../../services/gestion-seguimientos/gestion-seguimientos.service'
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login/login.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable} from 'rxjs';
import { formatDate } from '@angular/common';
import { GestionSeguimiento } from '../../Model/gestionSeguimiento'
import { SeguimientosService } from '../../services/seguimientos/seguimientos.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-gestion-seguimientos',
  templateUrl: './gestion-seguimientos.component.html',
  styleUrls: ['./gestion-seguimientos.component.css']
})
export class GestionSeguimientosComponent implements OnInit {

  private ID_SEGUIMIENTOS
  usuario: string
  totalRecords
  seguimiento2
  rows = 0;
  page = 10;
  gestionSeguimiento
  seguimiento
  seguimientoObs
  isReadonly = false;
  @Input() seguimientosCaso;
  private seguimientosCaso$: Observable<any[]>;
  gestionseguimiento: GestionSeguimiento = {
    ID_GESTION_SEGUIMIENTO: '',
    ID_SEGUIMIENTOS: '',
    DESCRIPCION: '',
    FECHA_CREACION: '',
    USUARIO_CREACION: '',
    FECHA_MODIFICACION: '',
    USUARIO_MODIFICACION: '',
    Comentarios: ''
  }
  constructor(private gestionSeguimientoService: GestionSeguimientosService, activateRoute: ActivatedRoute, private loginservice: LoginService, private modalService: NgbModal, private seguimientosservice: SeguimientosService, private router: Router) { this.usuario = this.loginservice.getCurrentUser(); this.ID_SEGUIMIENTOS = activateRoute.snapshot.params['id'] }

  ngOnInit(): void {
    this.cargarGestion();
    this.listarseguimientoOBS();
  }

  cargarGestion() {
    this.gestionSeguimientoService.cargarGestion(this.ID_SEGUIMIENTOS).subscribe(res => {
      this.gestionSeguimiento = res;
      console.log(this.gestionSeguimiento)
    })
  }

  listarseguimientoOBS() {
    this.seguimientosCaso$ = this.gestionSeguimientoService.getSeguimientos$();
    this.seguimientosCaso$.subscribe(seguimiento => {
      this.seguimientoObs = seguimiento;
      if (this.seguimientoObs.ESTADO == 'Realizado') {
        this.isReadonly = true;
        console.log('entro')
      } else {
        this.isReadonly = false;
      }
    })
  }

  guardarGestion() {
    delete this.gestionseguimiento.ID_GESTION_SEGUIMIENTO;
    delete this.gestionseguimiento.FECHA_CREACION;
    delete this.gestionseguimiento.FECHA_MODIFICACION;
    this.gestionseguimiento.ID_SEGUIMIENTOS = this.ID_SEGUIMIENTOS;
    this.gestionseguimiento.USUARIO_CREACION = this.usuario;
    this.gestionseguimiento.USUARIO_MODIFICACION = this.usuario;
    this.gestionSeguimientoService.guardarGestion(this.gestionseguimiento).subscribe(res => {
      Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {
          this.cargarGestion();
        }
      })
    })
  }

  onRowSelect(event, contentUpdate) {
    this.seguimiento2 = event.data;
    if (this.seguimientoObs.ESTADO = 'Realizado') {
      this.isReadonly = true;
      console.log('entro')
    } else {
      this.isReadonly = false;
    }
    this.open(contentUpdate)
  }

  cerrarcaso() {
    this.seguimientosCaso$ = this.gestionSeguimientoService.getSeguimientos$();
    this.seguimientosCaso$.subscribe(seguimiento => {
      this.seguimiento = seguimiento;
    })
    delete this.seguimiento.FECHA_REQUERIMIENTO;
    delete this.seguimiento.Nombres;
    delete this.seguimiento.Apellidos;
    delete this.seguimiento.ID_PERFIL;
    this.seguimiento.ESTADO = 'Realizado'
    let today = new Date();
    let jstoday = '';
    jstoday = formatDate(today, 'yyyy-MM-dd hh:mm:ss a', 'en-US');
    this.seguimiento.FECHA_FINALIZACION = jstoday;
    this.seguimientosservice.ActualizarDatos(this.ID_SEGUIMIENTOS, this.seguimiento).subscribe(res => {
      Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {
          this.router.navigate(['/Seguimientos-listar']);
        }
      })
    })
  }

  editarSeguimiento() {
    delete this.seguimiento2.FECHA_CREACION;
    delete this.seguimiento2.FECHA_MODIFICACION;
    console.log(this.seguimiento2)
    this.gestionSeguimientoService.ActualizarDatos(this.seguimiento2.ID_GESTION_SEGUIMIENTO, this.seguimiento2).subscribe(res => {
      console.log(res);
      Swal.fire({
        title: 'Actualizado!',
        text: 'Datos actualizados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }).then((result) => {
        if (result.value) {
          this.cargarGestion();
        }
      })
    })
  }

  redireccionar() {
    if (this.loginservice.isAnalistas || this.loginservice.isSoporte || this.loginservice.isDesarrollo) {
      this.router.navigate(['/Seguimientos']);
    }else{
      this.router.navigate(['/Seguimientos-listar']);
    }
  }

  paginador(event) {
    console.log(event);
    // this.rows = event.rows;
    // this.page = event.page;
    this.cargarGestion();
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  update(contentUpdate) {
    this.modalService.open(contentUpdate, { size: 'lg' });
  }

}
