import { Component, VERSION } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;


  constructor(private userService:UserService) {
    
  }


  ngOnInit(){
    this.userService.getData()
  }
}
