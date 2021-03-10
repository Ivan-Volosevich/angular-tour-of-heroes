import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  ngOnInit() {
    setTimeout(() => {
      this.title = 'ololololo';
    }, 1000)

    setTimeout(() => {
      this.title = 'Hi, Mr. Poter?';
    }, 3000)

    setTimeout(() => {
      this.title = 'So what?';
    }, 5000)

    setTimeout(() => {
      this.title = 'Oh, sorry. This is:';
    }, 7000)

    setTimeout(() => {
      this.title = 'Tour of Heroes';
    }, 9000)
  }
}
