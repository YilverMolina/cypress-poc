import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FilterByPipe,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent,
    FilterByPipe,
    ButtonComponent
  ]
})
export class SharedModule { }
