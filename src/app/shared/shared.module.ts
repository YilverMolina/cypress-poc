import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FilterByPipe } from './pipes/filter-by.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FilterByPipe
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent,
    FilterByPipe
  ]
})
export class SharedModule { }
