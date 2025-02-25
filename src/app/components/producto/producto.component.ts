import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-producto',
  imports: [NgIf,NgClass],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input()
  product?: Producto;
}
