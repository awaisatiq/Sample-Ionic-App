import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./Wish/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./Wish/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./User/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./User/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./User/wallet/wallet.module').then( m => m.WalletPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
