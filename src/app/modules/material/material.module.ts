import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
