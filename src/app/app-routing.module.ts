import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [ // AL agregarle hijos a este path, cada uno va a utilizar ademas su componente el componente padre 'LayoutComponent'
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },  
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        // Con lo anterior, se resuelve/carga todo un modulo
        // component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },  
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)]
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  // {preloadingStrategy: PreloadAllModules}) Sirve para que se carguen los modulos en otro hilo lentamente,
  // sirve mucho para redes bajas como la 3G, entonces carga el modulo luego de cargar todo lo que necesita principalmente
  exports: [RouterModule]
})
export class AppRoutingModule { }
