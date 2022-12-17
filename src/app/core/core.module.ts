// * Core-module es casi igual que el Share-module, estos comparten cosas, pero Shared-module debe ser
//   importado, el Core-module por defecto va a estar en todos los modulos (así se importe o no)
// * Core-module segmenta/agrupa componentes si y solo si se comparten a traves de toda la app, pero solo
//   generando una referencia unica
// * Por lo tanto, el Core-module sirve para guardar servicios que tengan una sola referencia de los datos

// Core-module  |  Shared-module
// -------------|----------------
//              |    Components
//   Services   |    Directives
//              |      Pipes

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductsService] 
  // Ahora este servicio no se tendrá que importar en cada componente que lo requiera
})
export class CoreModule { }
