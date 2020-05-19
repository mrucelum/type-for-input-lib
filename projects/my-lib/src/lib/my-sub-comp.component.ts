import { Component, Input } from '@angular/core';
import { ViewType } from './my-lib.component';

@Component({
  selector: 'lib-my-sub-comp',
  template: '<div>{{name}}</div>',
  styles: [
  ]
})
export class MySubComp {

  @Input() public name: string;
  @Input() public viewType: ViewType;

}
