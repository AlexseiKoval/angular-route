import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ DataService  ]
})
export class AppComponent  {
  constructor(private dataService: DataService, ){
    console.log(dataService);
  }
  name = 'Angular';
}
