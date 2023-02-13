import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]



  monthchanged(event:Event){
    let ctrl = <HTMLSelectElement>(event.target);
    alert("you selected " + ctrl.value);
  }
}
