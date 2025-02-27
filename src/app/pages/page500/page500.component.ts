import { Component } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent } from '@coreui/angular';

@Component({
    selector: 'app-page500',
    templateUrl: './page500.component.html',
    styleUrls: ['./page500.component.scss'],
    imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Page500Component {

  constructor() { }

}
