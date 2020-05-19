import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLibComponent } from './my-lib.component';
import { MySubComp } from './my-sub-comp.component';

@NgModule({
  declarations: [MyLibComponent, MySubComp],
  imports: [
    CommonModule
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
