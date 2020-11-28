import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent
    ],
    imports:[
        HomeRoutingModule,
        CommonModule,
        NgbCarouselModule,
        NgbModule,
        SharedModule,
        MaterialModule
    ],
    providers:[],
    bootstrap:[]
})

export class HomeModule { }
