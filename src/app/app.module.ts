import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { ArtistsHomeComponent } from './artists-home/artists-home.component';
import { ArtistsArethaComponent } from './artists-aretha/artists-aretha.component';
import { ArtistsJaniceComponent } from './artists-janice/artists-janice.component';
import { ArtistsAlComponent } from './artists-al/artists-al.component';
import { ArtistsBillyComponent } from './artists-billy/artists-billy.component';
import { ArtistsJohnnyComponent } from './artists-johnny/artists-johnny.component';

//Adding Dependency Injection import for the shared module
import { SharedModule } from './shared/shared.module'


@NgModule({
  declarations: [
    AppComponent,    
    ArtistsHomeComponent,
    ArtistsArethaComponent,
    ArtistsJaniceComponent,
    ArtistsAlComponent,
    ArtistsBillyComponent,
    ArtistsJohnnyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
