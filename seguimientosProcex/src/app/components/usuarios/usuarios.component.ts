import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/Model/registro';
import { Usuario } from 'src/app/Model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ListacomboseguimientoService } from '../../services/listacomboseguimiento/listacomboseguimiento.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  actualizarInfo
  perfil
  Usuario
  registro: Registro = {
    ID_REGISTRO: '',
    Nombres: '',
    Apellidos: '',
    Correo: '',
    Telefono: ''
  }

  usuario: Usuario = {
    ID_USUARIO: 0,
    ID_REGISTRO: '',
    ID_PERFIL: '',
    USUARIO: '',
    Contrasena: ''
  }

  constructor(private listacomboSeguimientoservice: ListacomboseguimientoService, private usuarioService: UsuarioService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cargarPerfil();
    this.caragarDatos();
  }

  cargarPerfil() {
    this.listacomboSeguimientoservice.cargarPerfil().subscribe(res => {
      this.perfil = res;
    })
  }

  caragarDatos() {
    this.usuarioService.cargarDatos().subscribe(res => {
      this.Usuario = res;
    })
  }

  registrar() {
    this.usuarioService.registrarUsuario(this.registro).subscribe(res => {
      this.crearNuevoUsuario();
    })
  }

  crearNuevoUsuario() {
    delete this.usuario.ID_USUARIO;
    this.usuario.ID_REGISTRO = this.registro.ID_REGISTRO;
    this.usuarioService.guardarUsuario(this.usuario).subscribe(res => {
      Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {
          this.caragarDatos();
        }
      })
    })
  }

  onRowSelect(event, modal) {
    this.actualizarInfo = event.data;
    this.modalService.open(modal, { size: 'lg' });
  }

  nuevo() {
    this.registro = {
      ID_REGISTRO: '',
      Nombres: '',
      Apellidos: '',
      Correo: '',
      Telefono: ''
    }
    this.usuario = {
      ID_USUARIO: 0,
      ID_REGISTRO: '',
      ID_PERFIL: '',
      USUARIO: '',
      Contrasena: ''
    }
  }

  actualizarRegistro() {
    delete this.actualizarInfo.DESCRIPCION
    this.usuarioService.actualizarResgistro(this.actualizarInfo, this.actualizarInfo.ID_REGISTRO).subscribe(res => {
      console.log(res);
      console.log(this.actualizarInfo.ID_REGISTRO);
      Swal.fire({
        title: 'Actualizado!',
        text: 'Datos actualizados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }).then((result) => {
        if (result.value) {
          this.caragarDatos();
          
        }
      })
    })
  }

  eliminarUsuario(btnUsuario) {
    if (btnUsuario) {
      Swal.fire({
        title: 'Advertencia',
        text: "¿Esta seguro de que desea eliminar el usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, elimínalo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.usuarioService.eliminarUsuario(btnUsuario).subscribe(res => { });
          this.usuarioService.eliminarRegistro(btnUsuario).subscribe(res => { });
          Swal.fire(
            'Eliminado!',
            'El usuario se a eliminado con éxito.',
            'success'
          ).finally(() => {
            if (!result.isDismissed) {
              window.location.reload();
            }
          }
          )
        }
      })
    }
  }
}
