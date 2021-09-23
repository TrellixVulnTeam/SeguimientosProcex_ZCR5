import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service'
import { Login } from '../../Model/login'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Login = {
    USUARIO: '',
    Contrasena: '',
    ID_PERFIL: ''
  }
  constructor(private loginserve: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private ngxSpinnerService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  Iniciarsesion() {
    this.ngxSpinnerService.start();
    this.loginserve.loginUser(this.usuario.USUARIO, this.usuario.Contrasena).subscribe(res => {
      this.usuario = res.signedUser
      localStorage.setItem("perfil", JSON.stringify(this.usuario.ID_PERFIL));
      this.loginserve.setUser(this.usuario.USUARIO, res.token)
      this.ngxSpinnerService.stop();
      if (this.loginserve.isAnalistas || this.loginserve.isSoporte || this.loginserve.isDesarrollo) {
        this.router.navigate(['/Seguimientos']);
      }else{
        this.router.navigate(['/Seguimientos-listar']);
      }
    },
      () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: "Usuario y/o Contraseña incorrecto",
          showConfirmButton: true,
          allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
        })
        this.ngxSpinnerService.stop();
      })

  }

}
