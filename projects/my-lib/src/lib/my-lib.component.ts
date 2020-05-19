import { Component, Input } from '@angular/core';

export type ViewType = 'card' | 'list';

@Component({
  selector: 'lib-my-lib',
  templateUrl: 'my-lib.component.html',
  styles: []
})
export class MyLibComponent {

  @Input() public items: { name: string }[];

  public viewType = 'card';

}
