import { BackgroundImageResolver } from './resolvers/background-image.resolver';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: {
      background: BackgroundImageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BackgroundImageResolver]
})
export class AppRoutingModule { }
