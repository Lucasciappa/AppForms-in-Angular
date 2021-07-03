import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

import { nombreApellidoPattern, emailPattern, noPuedeSerCiappa } from '../../shared/validator/validaciones';
import { ValidatorService } from '../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})



export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)] ],
    email: ["", [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailV] ],
    username: ["", [Validators.required, Validators.minLength(3), this.vs.noPuedeSerCiappa] ],
    password: ["", [Validators.required, Validators.minLength(6)] ],
    password2: ["", [Validators.required] ],
  }, {
    validators: [ this.vs.camposIguales("password", "password2") ]
  });

  get emailErrorMsg(): string{
    
    const errors = this.miFormulario.get("email")?.errors;
    if( errors?.required ){
      return "El email es obligatorio";
    } else if (errors?.pattern){
      return "El valor ingresado no tiene formato de email"
    } else if (errors?.emailTomado){
      return "El email ya fué usado"
    }

    return "";
  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private emailV: EmailValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: "Lucas Ciappa",
      email: "test1@test.com",
      username: "LucasCiappa97"
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }



  submitFormulario(){
    this.miFormulario.markAllAsTouched();
    
  }

}
