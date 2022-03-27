import { Component, VERSION } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
arg = " do serwisu";

  constructor(private userService:UserService) {
    
  }


  ngOnInit(){
    this.userService.getData()
    console.log(this.userService.x)
    console.log(this.userService.getData2())
    console.log(this.userService.getData3(this.arg))
  }
}
