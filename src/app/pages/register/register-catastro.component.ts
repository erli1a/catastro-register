import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-register-catastro',
  imports: [ReactiveFormsModule, FluidModule, SelectModule],
  templateUrl: './register-catastro.component.html',
  styleUrl: './register-catastro.component.scss'
})
export class RegisterCatastroComponent { 
  protected form! : FormGroup
  protected formBuilder = inject(FormBuilder)

  constructor(){
    this.buildForm()
  }

  buildForm(){
    this.form = this.formBuilder.group({
      activity : ['', [ Validators.required]],
      clasification : ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
  }

}
