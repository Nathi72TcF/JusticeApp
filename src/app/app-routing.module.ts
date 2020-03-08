import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'subcategory/:id',
    loadChildren: () => import('./subcategory/subcategory.module').then( m => m.SubcategoryPageModule)
  },
  {
    path: 'familylaw/:id',
    loadChildren: () => import('./familylaw/familylaw.module').then( m => m.FamilylawPageModule)
  },
  {
    path: 'seekhelpform',
    loadChildren: () => import('./seekhelpform/seekhelpform.module').then( m => m.SeekhelpformPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'userlogin',
    loadChildren: () => import('./userlogin/userlogin.module').then( m => m.UserloginPageModule)
  },
  {
    path: 'userreport',
    loadChildren: () => import('./userreport/userreport.module').then( m => m.UserreportPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'lawlogin',
    loadChildren: () => import('./lawlogin/lawlogin.module').then( m => m.LawloginPageModule)
  },
  {
    path: 'lawhome',
    loadChildren: () => import('./lawhome/lawhome.module').then( m => m.LawhomePageModule)
  },
  {
    path: 'lawviewclient/:id',
    loadChildren: () => import('./lawviewclient/lawviewclient.module').then( m => m.LawviewclientPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
