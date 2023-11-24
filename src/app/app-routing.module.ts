import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPreloadService } from './services/custom-preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';

import { AdminGuard } from './guards/admin.guard';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
  const routes: Routes = [
      
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // //{
  // //  path: '',
  // //  component: HomeComponent
  // // },
  // {
  //   path: 'category/:id',
  //   component: CategoryComponent
  // },
  // {
  //   path: 'product/:id',
  //   component: ProductDetailComponent
  // },
  // {
  //   path: 'notFound',
  //   component: NotFoundComponent
  // },
  // {
  //   path: 'my-cart',
  //   component: MyCartComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  // {
  //   path: 'recovery',
  //   component: RecoveryComponent
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent
  // },
    {
      path: '',
      loadChildren: () => import('./website/website.module').then( m=> m.WebsiteModule),
      data: {
        preload: true,
      }
    },
    {
      path: 'cms',
      canActivate: [AdminGuard],
      loadChildren: () => import('./cms/cms.module').then( m=> m.CmsModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
    // preloadingStrategy: CustomPreloadService
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
