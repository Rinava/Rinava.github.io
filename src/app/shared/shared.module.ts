import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
