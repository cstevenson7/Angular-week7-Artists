import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules needed for mobile use and to use the material, buttons, toolbars, etc 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule,MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


//the cdk developer kit -  for custom sizing of screens
import { LayoutModule } from '@angular/cdk/layout';

import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';


//time saving way  to deals with modules is to make an array
const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  LayoutModule,
  CommonModule,
  RouterModule
]

const components= [
  ShellComponent
]

//Now you can use the spread operator "..."
@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports:[
    ...modules,
    ...components
  ]
})
export class SharedModule { }
