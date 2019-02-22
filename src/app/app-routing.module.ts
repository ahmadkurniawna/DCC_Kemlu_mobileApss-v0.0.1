import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'tab8', loadChildren: './tab8/tab8.module#Tab8PageModule' },
  // { path: 'tab7', loadChildren: './tab7/tab7.module#Tab7PageModule' },
  // { path: 'tab6', loadChildren: './tab6/tab6.module#Tab6PageModule' },
  // { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
