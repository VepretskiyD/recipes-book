import { OnInit, Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCo4dkDqWYqqW0uRpOblFDlQExFPHDNRKU",
      authDomain: "ng-recipe-book-1bd25.firebaseapp.com"
    })
  }
}
