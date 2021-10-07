import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Seguimiento } from '../../Model/seguimiento';
import { ListacomboseguimientoService } from '../../services/listacomboseguimiento/listacomboseguimiento.service';
import { SeguimientosService } from '../../services/seguimientos/seguimientos.service';
import { GestionSeguimientosService } from '../../services/gestion-seguimientos/gestion-seguimientos.service'
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ReportesService } from '../../services/reportes/reportes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-seguimientos-listar',
  templateUrl: './seguimientos-listar.component.html',
  styleUrls: ['./seguimientos-listar.component.css']
})
export class SeguimientosListarComponent implements OnInit {

  medio
  isReadonly = false;
  tipoRequerimiento
  categoria
  resultado
  totalRecords
  responsableseguimiento
  responsableseguimiento2
  responsableseguimientofilt
  responsable
  cargaseguimiento
  editSeguimiento
  seguimiento2
  prestador
  rows = 10;
  page = 0;
  EPS = ''
  ID_REGISTRO = ''
  ID_REGISTRO1
  TIPO_REQUERIMIENTO = ''
  ESTADO = ''
  usuario
  reporte
  perfil
  seguimiento: Seguimiento = {
    ID_SEGUIMIENTOS: 0,
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
  constructor(private modalService: NgbModal, private seguimintoService: SeguimientosService, private listaComboSeguimientoService: ListacomboseguimientoService,
    private usuarioService: UsuarioService, private router: Router, private gestionSeguimientoService: GestionSeguimientosService, private loginservice: LoginService,
    private reporteService: ReportesService) {
    this.usuario = this.loginservice.getCurrentUser()
  }

  ngOnInit(): void {
    this.opcionesListas();
  }

  opcionesListas() {
    this.CargarSeguimientos();
    this.cargarmedio();
    this.cargarTipoRequerimiento();
    this.cargarCategoría();
    this.cargarResponsableSeguimiento();
    this.numerodeRegistros();
    this.cargarPrestador();
    this.cargarReporteCasosPerfil();
    this.cargarperfil();
    this.cargarResponsableSeguimientoFil();
  }

  CargarSeguimientos() {
    this.seguimintoService.cargarTodos(this.page, this.rows, this.EPS, this.TIPO_REQUERIMIENTO, this.ESTADO, this.ID_REGISTRO).subscribe(res => {
      this.cargaseguimiento = res;

    })
  }
  numerodeRegistros() {
    this.seguimintoService.numerodeRegistros().subscribe(res => {
      this.totalRecords = res;
    })
  }

  paginador(event) {
    console.log(event);
    this.rows = event.rows;
    this.page = event.page;
    this.CargarSeguimientos();
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

  cargarPrestador() {
    this.listaComboSeguimientoService.cargarPrestador().subscribe(res => {
      this.prestador = res;
    })
  }

  cargarperfil() {
    this.listaComboSeguimientoService.cargarPerfil().subscribe(res => {
      this.perfil = res;
    })
  }
  cargarResponsableSeguimiento() {
    this.usuarioService.cargarResponsableSeguimiento(this.seguimiento.ID_PERFIL).subscribe(res => {
      this.responsableseguimiento = res;
      console.log(this.responsableseguimiento)
    })
  }

  cargarReporteCasosPerfil() {
    let perfil = this.loginservice.getCurrentperfil()
    this.reporteService.cargarReporteCasosPorPerfil(perfil).subscribe(res => {
      this.reporte = res;
    })
  }

  cargarResponsableSeguimientoFil() {
    this.usuarioService.cargarResponsableSeguimientoGest().subscribe(res => {
      this.responsableseguimientofilt = res;
    })
  }


  onRowSelect(event, content) {
    this.seguimiento2 = event.data;
    this.gestionSeguimientoService.consultarSeguimientosOBS(this.seguimiento2)
    if (this.seguimiento2.Nombres == null && this.seguimiento2.Apellidos == null) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Debe asignar un responsable ",
        showConfirmButton: true,
        allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
      })
    } else {
      this.router.navigate(['/gestion-seguimientos/', this.seguimiento2.ID_SEGUIMIENTOS]);
    }

    // if(this.seguimiento2.FECHA_FINALIZACION != ""){
    //   this.isReadonly = true;
    // }else{
    //   this.isReadonly = false;
    // }
    // this.open(content)
  }

  guardarDatos() {
    delete this.seguimiento.ID_SEGUIMIENTOS;
    delete this.seguimiento.FECHA_REQUERIMIENTO;
    if (this.seguimiento.ID_REGISTRO == '') {
      this.seguimiento.ESTADO = 'En proceso';
    } else {
      this.seguimiento.ESTADO = 'Pendiente';
    }
    this.seguimiento.USUARIO_CREACION = this.usuario;
    console.log(this.seguimiento)

    this.seguimintoService.guardarSeguimiento(this.seguimiento).subscribe(res => {
      console.log(res);
      Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {
          this.nuevo();
          this.CargarSeguimientos();
        }
      })
    })
  }

  editarSeguimiento() {
    delete this.seguimiento2.FECHA_REQUERIMIENTO;
    delete this.seguimiento2.Nombres;
    delete this.seguimiento2.Apellidos;
    if (this.seguimiento2.FECHA_FINALIZACION != "") {
      this.seguimiento2.ESTADO = 'Realizado'
      this.isReadonly = true;
    }
    this.seguimintoService.ActualizarDatos(this.seguimiento2.ID_SEGUIMIENTOS, this.seguimiento2).subscribe(res => {
      console.log(res);
      Swal.fire({
        title: 'Actualizado!',
        text: 'Datos actualizados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }).then((result) => {
        if (result.value) {
          this.CargarSeguimientos();
        }
      })
    })
  }

  cargarResponsableSeguimientoasig(ID_PERFIL) {
    this.usuarioService.cargarResponsableSeguimiento(ID_PERFIL).subscribe(res => {
      this.responsableseguimiento2 = res;
      console.log(this.responsableseguimiento2)
    })
  }

  formulario(content5) {
    this.modalService.open(content5, { size: 'lg', scrollable: true });
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  filtroEps(content1) {
    this.modalService.open(content1, { size: 'sm', centered: true });
  }

  filtroTiporequerimiento(content2) {
    this.modalService.open(content2, { size: 'sm', centered: true });
  }

  filtroEstado(content4) {
    this.modalService.open(content4, { size: 'sm', centered: true });
  }

  filtroResponsable(content5) {
    this.modalService.open(content5, { size: 'sm', centered: true });
  }

  asignarResponsabl(content6, data) {
    this.responsable = data
    this.cargarResponsableSeguimientoasig(data.ID_PERFIL);
    if (this.responsable.FECHA_FINALIZACION != "") {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Este caso ya se encuentra cerrado",
        showConfirmButton: true,
        allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
      })
    }else{
      this.modalService.open(content6, { size: 'sm', centered: true });
    }
  
  }

  asignarResponsable() {
    delete this.responsable.FECHA_REQUERIMIENTO;
    delete this.responsable.Nombres;
    delete this.responsable.Apellidos;
    delete this.responsable.Area;
    this.responsable.ID_REGISTRO = this.ID_REGISTRO1;
    this.responsable.ESTADO = 'Pendiente'
    this.isReadonly = true;
    console.log(this.responsable)
    this.seguimintoService.ActualizarDatos(this.responsable.ID_SEGUIMIENTOS, this.responsable).subscribe(res => {
      console.log(res);
      Swal.fire({
        title: 'Actualizado!',
        text: 'Datos actualizados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }).then((result) => {
        if (result.value) {
          this.CargarSeguimientos();
        }
      })
    })
  }

  limpiarFiltros() {
    this.EPS = '';
    this.ID_REGISTRO = '';
    this.TIPO_REQUERIMIENTO = '';
    this.ESTADO = '';
    this.CargarSeguimientos();
  }

  nuevo() {
    this.seguimiento = {
      ID_SEGUIMIENTOS: 0,
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
      USUARIO_CREACION: ''
    }
  }

}