import { Component, OnInit, Input } from '@angular/core';
import { GestionSeguimientosService } from '../../services/gestion-seguimientos/gestion-seguimientos.service'
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login/login.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { GestionSeguimiento } from '../../Model/gestionSeguimiento'
import { ListacomboseguimientoService } from '../../services/listacomboseguimiento/listacomboseguimiento.service';
import { SeguimientosService } from '../../services/seguimientos/seguimientos.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Seguimiento } from '../../Model/seguimiento';

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
  responsableseguimiento
  rows = 0;
  page = 10;

  medio
  tipoRequerimiento
  categoria
  prestador
  perfil
  gestionSeguimiento
  seguimiento1
  seguimientoObs
  isReadonly = false;
  isReadonly2 = false;
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

  seguimiento: Seguimiento = {
    EPS: '',
    FECHA_REQUERIMIENTO: '',
    MEDIO: '',
    TIPO_REQUERIMIENTO: '',
    TITULO_REQUERIMIENTO: '',
    DESCRIPCION_REQUERIMIENTO: '',
    AREA_VALIDACION: '',
    ESTADO: '',
    FECHA_ENTREGA: '',
    FECHA_FINALIZACION: '',
    SEGUIMIENTO: '',
    ID_REGISTRO: '',
    RUTA_SOPORTES: '',
    Categoria: '',
    USUARIO_CREACION: '',
    ID_PERFIL: '',
  }
  constructor(private gestionSeguimientoService: GestionSeguimientosService, activateRoute: ActivatedRoute, public loginservice: LoginService, private modalService: NgbModal, private seguimientosservice: SeguimientosService, private router: Router,
   private listaComboSeguimientoService: ListacomboseguimientoService,private usuarioService: UsuarioService ) { this.usuario = this.loginservice.getCurrentUser(); this.ID_SEGUIMIENTOS = activateRoute.snapshot.params['id'] }

  ngOnInit(): void {
    this.cargarGestion();
    this.cargarSeguimiento();
    this.opcionesListas();
  }
  opcionesListas() {
    this.cargarmedio();
    this.cargarTipoRequerimiento();
    this.cargarCategoría();
     this.cargarResponsableSeguimiento();
    this.cargarPrestador();
    this.actualizarIformacion();
    this.cargarperfil();
  }

  cargarmedio() {
    this.listaComboSeguimientoService.cargarMedio().subscribe(res => {
      this.medio = res;
    })
  }

  cargarTipoRequerimiento() {
    this.listaComboSeguimientoService.cargarTipoRequerimiento().subscribe(res => {
      this.tipoRequerimiento = res;
    })
  }

  cargarCategoría() {
    this.listaComboSeguimientoService.cargarCategoria().subscribe(res => {
      this.categoria = res;
    })
  }

  
  cargarperfil(){
    this.listaComboSeguimientoService.cargarPerfil().subscribe(res=>{
      this.perfil = res;
      console.log(this.perfil)
    })
  }

  cargarPrestador() {
    this.listaComboSeguimientoService.cargarPrestador().subscribe(res => {
      this.prestador = res;
    })
  }

  cargarSeguimiento() {
    this.seguimientosservice.cargarSeguimeiento(this.ID_SEGUIMIENTOS).subscribe(res => {
      this.seguimiento1 = res;
      for (let i = 0; i < this.seguimiento1.length; i++) {
        if (this.seguimiento1[i].ESTADO == 'Realizado') {
          this.isReadonly = true;
          console.log('entro')
        } else {
          this.isReadonly = false;
        }
      }
    })
  }

  cargarResponsableSeguimiento() {
    this.usuarioService.cargarResponsableSeguimientoGest().subscribe(res => {
      this.responsableseguimiento = res;
    })
  }

  cargarGestion() {
    this.gestionSeguimientoService.cargarGestion(this.ID_SEGUIMIENTOS).subscribe(res => {
      this.gestionSeguimiento = res;
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
          this.gestionseguimiento.DESCRIPCION =  '';
          this.cargarGestion();
        }
      })
    })
  }

  onRowSelect(event, contentUpdate) {
    this.seguimiento2 = event.data;
    for (let i = 0; i < this.seguimiento1.length; i++) {
      if (this.seguimiento1[i].ESTADO == 'Realizado') {
        this.isReadonly = true;
        console.log('entro')
      } else {
        this.isReadonly = false;
      }
    }

    this.open(contentUpdate)
  }

  cerrarcaso() {
    delete this.seguimiento.FECHA_REQUERIMIENTO;
    delete this.seguimiento1.Nombres;
    delete this.seguimiento1.Apellidos;
    this.seguimiento1.ID_PERFIL;
    for (let i = 0; i < this.seguimiento1.length; i++) {
      this.seguimiento.ESTADO = 'Realizado'
      let today = new Date();
      let jstoday = '';
      jstoday = formatDate(today, 'yyyy-MM-dd hh:mm:ss a', 'en-US');
      this.seguimiento.FECHA_FINALIZACION = jstoday;
      console.log(this.seguimiento1)
      this.seguimiento.EPS = this.seguimiento1[i].EPS;
      this.seguimiento.MEDIO = this.seguimiento1[i].MEDIO;
      this.seguimiento.TIPO_REQUERIMIENTO = this.seguimiento1[i].TIPO_REQUERIMIENTO;
      this.seguimiento.TITULO_REQUERIMIENTO = this.seguimiento1[i].TITULO_REQUERIMIENTO;
      this.seguimiento.DESCRIPCION_REQUERIMIENTO = this.seguimiento1[i].DESCRIPCION_REQUERIMIENTO;
      this.seguimiento.AREA_VALIDACION = this.seguimiento1[i].AREA_VALIDACION;
      this.seguimiento.SEGUIMIENTO = this.seguimiento1[i].SEGUIMIENTO;
      this.seguimiento.FECHA_ENTREGA = this.seguimiento1[i].FECHA_ENTREGA;
      this.seguimiento.Categoria = this.seguimiento1[i].Categoria;
      this.seguimiento.ID_REGISTRO = this.seguimiento1[i].ID_REGISTRO;
      this.seguimiento.USUARIO_CREACION = this.seguimiento1[i].USUARIO_CREACION;
      this.seguimiento.ID_PERFIL = this.seguimiento1[i].ID_PERFIL;
    }

    this.seguimientosservice.ActualizarDatos(this.ID_SEGUIMIENTOS, this.seguimiento).subscribe(res => {
      Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {
          if (this.loginservice.isAnalistas || this.loginservice.isSoporte || this.loginservice.isDesarrollo) {
            this.router.navigate(['/Seguimientos']);
          } else {
            this.router.navigate(['/Seguimientos-listar']);
          }
        }
      })
    })
  }

  actualizarIformacion(){
    if (this.loginservice.isAnalistas || this.loginservice.isSoporte || this.loginservice.isDesarrollo) {
      this.isReadonly2 = true;
      console.log('entro -----------------')
    } else {
      this.isReadonly2 = false;
      console.log('no entro -----------------')
    }
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
    } else {
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

  actualizarSeguimiento() {
    delete this.seguimiento.FECHA_REQUERIMIENTO;
    delete this.seguimiento1.Nombres;
    delete this.seguimiento1.Apellidos;
    delete this.seguimiento1.ID_PERFIL;
    for (let i = 0; i < this.seguimiento1.length; i++) {
      this.seguimiento.ESTADO = this.seguimiento1[i].ESTADO;
      this.seguimiento.FECHA_FINALIZACION = this.seguimiento1[i].FECHA_FINALIZACION;
      this.seguimiento.EPS = this.seguimiento1[i].EPS;
      this.seguimiento.MEDIO = this.seguimiento1[i].MEDIO;
      this.seguimiento.TIPO_REQUERIMIENTO = this.seguimiento1[i].TIPO_REQUERIMIENTO;
      this.seguimiento.TITULO_REQUERIMIENTO = this.seguimiento1[i].TITULO_REQUERIMIENTO;
      this.seguimiento.DESCRIPCION_REQUERIMIENTO = this.seguimiento1[i].DESCRIPCION_REQUERIMIENTO;
      this.seguimiento.AREA_VALIDACION = this.seguimiento1[i].AREA_VALIDACION;
      this.seguimiento.SEGUIMIENTO = this.seguimiento1[i].SEGUIMIENTO;
      this.seguimiento.FECHA_ENTREGA = this.seguimiento1[i].FECHA_ENTREGA;
      this.seguimiento.Categoria = this.seguimiento1[i].Categoria;
      this.seguimiento.ID_REGISTRO = this.seguimiento1[i].ID_REGISTRO;
      this.seguimiento.USUARIO_CREACION = this.seguimiento1[i].USUARIO_CREACION;
      console.log(this.seguimiento)
    }
    this.seguimientosservice.ActualizarDatos(this.ID_SEGUIMIENTOS, this.seguimiento).subscribe(res => {
      Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {
         this.cargarSeguimiento();
        }
      })
    })
  }

  nuevo(){
    this.gestionseguimiento.DESCRIPCION =  '';
  }



}
