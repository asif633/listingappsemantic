import { Component, OnInit } from '@angular/core';
import { Semantic } from './semantic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit(){
    let semantic = new Semantic();
    semantic.initAccoordion();
    semantic.initDropDown();
  }

}
