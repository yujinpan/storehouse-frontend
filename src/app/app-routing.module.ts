import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'helloworld',
    pathMatch: 'full'
  },
  {
    path: 'helloworld',
    loadChildren: './hello-world/hello-world.module#HelloWorldModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
