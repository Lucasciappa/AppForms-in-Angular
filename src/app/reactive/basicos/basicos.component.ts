import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   "nombre"     : new FormControl("RTX 4080ti"),
  //   "precio"     : new FormControl(1500),
  //   "existencias": new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: ["",[ Validators.required, Validators.minLength(3)]],
    precio: [1500,[ Validators.required, Validators.min(0)]],
    existencias: [6,[ Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: "Rtx 4080ti",
      precio: 1600,
    })
  }

  campoNoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset()
    console.log(this.miFormulario.value);
    
  }

}
