import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { QuicklinkModule } from 'ngx-quicklink';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from './../shared/shared.module';

// import { ImgComponent } from '../shared/components/img/img.component';
// import { ProductComponent } from '../shared/components/product/product.component';
// import { ProductsComponent } from '../shared/components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
// import { ReversePipe } from '../shared/pipes/reverse.pipe';
// import { TimeAgoPipe } from '../shared/pipes/time-ago.pipe';
// import { HighlightDirective } from '../shared/directives/highlight.directive';
import { HomeComponent } from './pages/home/home.component';
// import { NotFoundComponent } from '../not-found/not-found.component';
// import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    // ImgComponent,
    // ProductComponent,
    // ProductsComponent,
    NavComponent,
    // ReversePipe,
    // TimeAgoPipe,
    // HighlightDirective,
    HomeComponent,
    // NotFoundComponent,
    // CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
