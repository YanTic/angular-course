import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule { }