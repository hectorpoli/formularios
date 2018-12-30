import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  productos: string[];
  producto: any;

  productoForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, public toastr: ToastrService) { this.productos = []; }

  ngOnInit() {
    this.productoForm = this.formBuilder.group({
      producto: ['', Validators.required]
    });
  }

  get f() { return this.productoForm.controls; }

  createProducto() {
    this.submitted = true;

    if (this.productoForm.invalid) {
        return;
    }

    this.success = true;
    this.producto = this.f;
    this.productos.push(this.producto.producto.value);
    // this.producto = '';
    this.showSuccess('Agregado el producto ' + this.producto.producto.value, 'Producto agregado exitosamente' );
  }

  showSuccess(mensage: string, titulo: string) {
    this.toastr.success(mensage, titulo, {timeOut: 3000});
  }

}
