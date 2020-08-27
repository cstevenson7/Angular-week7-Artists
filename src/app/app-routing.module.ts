import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsHomeComponent } from './artists-home/artists-home.component';
import { ArtistsAlComponent } from './artists-al/artists-al.component';
import { ArtistsArethaComponent } from './artists-aretha/artists-aretha.component';
import { ArtistsBillyComponent } from './artists-billy/artists-billy.component';
import { ArtistsJaniceComponent } from './artists-janice/artists-janice.component';
import { ArtistsJohnnyComponent } from './artists-johnny/artists-johnny.component';

const routes: Routes = [

  {
    path:'home', component:ArtistsHomeComponent
  },
  {
    path:'al', component:ArtistsAlComponent
  },
  {
    path:'aretha', component:ArtistsArethaComponent
  },
  {
    path:'billy', component:ArtistsBillyComponent
  },
  {
    path:'janice', component:ArtistsJaniceComponent
  },
  {
    path:'johnny', component:ArtistsJohnnyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
