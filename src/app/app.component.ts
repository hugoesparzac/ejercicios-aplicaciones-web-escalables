import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, NgClass, ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esparza-Castaneda-Hugo-T2-P1';
  products: Producto[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true,  onSale: false, image: 'https://elektra.vtexassets.com/arquivos/ids/10613738/28011257.jpg?v=638755838528130000' },
    { id: 2, name: 'Smartphone', price: 800,  inStock: true,  onSale: true,  image: 'https://lamarinamx.vtexassets.com/arquivos/ids/813972/195949046995_1.jpg?v=638388006648230000' },
    { id: 3, name: 'Tablet', price: 400,    inStock: false, onSale: false, image: 'https://http2.mlstatic.com/D_NQ_NP_628655-MLU78868902348_092024-O.webp' },
    { id: 4, name: 'Monitor', price: 200,   inStock: true,  onSale: true,  image: 'https://www.costco.com.mx/medias/sys_master/products/hc3/h92/189581990985758.jpg' },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, image: 'https://img.pccomponentes.com/pcblog/385/diferencias-tipos-switch-teclado-7.jpg' },
    { id: 6, name: 'Mouse inalámbrico', price: 50,  inStock: false, onSale: false, image: 'https://www.officedepot.com.mx/medias/100021861.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjM3NjMzfGltYWdlL2pwZWd8YUdWbEwyaG1aaTh4TURBMU1USTJPVEE1T1RVMU1DNXFjR2N8ZmUzNDcyM2ExYzFiMDZmM2RkMTIxMzQxYzEyMTExMzRlMGE4M2E2NDI1M2FjZDAwNDY0ZTEzNDdjMDVhZGJjYw' },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true,  onSale: true,  image: 'https://m.media-amazon.com/images/I/711z8azMSUL.jpg' },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image: 'https://sounds.mx/cdn/shop/files/805112126811_2.jpg?v=1733269436&width=1000' },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true,  image: 'https://audiotek.com.mx/cdn/shop/products/782824-MLM43401732435_092020-F_962x.jpg?v=1739910276' },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, image: 'https://www.luxbeat.mx/pub/media/catalog/product/cache/73ee67912d9a8ad7a258b18a80cedf53/m/c/mc-10bgk.png' },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true,  image: 'https://images.pcel.com/1600/Hardware-Unidades-de-Estado-Solido-SSD-Kingston-SNV2S-1000G-444046-EOca5frFo2kdbIFN.jpg' },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, image: 'https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg' },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, image: 'https://tonivisa.com/cdn/shop/files/c92492f2-a7c9-4932-bfa4-12cc7e68f3cf_1500x1500.jpg?v=1730249431' },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, image: 'https://m.media-amazon.com/images/I/71MfdgsWMFL.jpg' },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true,  image: 'https://m.media-amazon.com/images/I/617N9LE+4YL._AC_UF1000,1000_QL80_.jpg' },
  ];
  selectedProduct?: Producto;

  selectProduct(product: Producto): void {
    this.selectedProduct = this.selectedProduct?.id === product.id ? undefined : product;
  }
}
