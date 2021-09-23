import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Seguimiento } from '../../Model/seguimiento';
import { ListacomboseguimientoService } from '../../services/listacomboseguimiento/listacomboseguimiento.service';
import { SeguimientosService } from '../../services/seguimientos/seguimientos.service';
import { GestionSeguimientosService } from '../../services/gestion-seguimientos/gestion-seguimientos.service'
import { UsuarioService } from '../../services/usuario/usuario.service';
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
  cargaseguimiento
  editSeguimiento
  seguimiento2
  prestador
  rows = 10;
  page = 0;
  EPS = ''
  ID_REGISTRO = ''
  TIPO_REQUERIMIENTO = ''
  ESTADO = ''
  usuario
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
    USUARIO_CREACION: ''
  }
  constructor(private modalService: NgbModal, private seguimintoService: SeguimientosService, private listaComboSeguimientoService: ListacomboseguimientoService,
    private usuarioService: UsuarioService, private router: Router, private gestionSeguimientoService: GestionSeguimientosService,private loginservice: LoginService,) {
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
  }

  CargarSeguimientos() {

    this.seguimintoService.cargarTodos(this.page, this.rows, this.EPS, this.TIPO_REQUERIMIENTO, this.ESTADO, this.ID_REGISTRO).subscribe(res => {
      this.cargaseguimiento = res;

      console.log(this.ID_REGISTRO)
    })
  }
  numerodeRegistros() {
    this.seguimintoService.numerodeRegistros().subscribe(res => {
      this.totalRecords = res;
      console.log(this.totalRecords);
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

  cargarResponsableSeguimiento() {
    this.usuarioService.cargarResponsableSeguimiento().subscribe(res => {
      this.responsableseguimiento = res;
      console.log(this.responsableseguimiento)
    })
  }

  onRowSelect(event, content) {
    this.seguimiento2 = event.data;
    this.gestionSeguimientoService.consultarSeguimientosOBS(this.seguimiento2)
    this.router.navigate(['/gestion-seguimientos/', this.seguimiento2.ID_SEGUIMIENTOS]);
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
    this.seguimiento.ESTADO = 'Pendiente';
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

  limpiarFiltros() {
    this.EPS = '';
    this.ID_REGISTRO = '';
    this.TIPO_REQUERIMIENTO = '';
    this.ESTADO = '';
    this.CargarSeguimientos();
  }

}