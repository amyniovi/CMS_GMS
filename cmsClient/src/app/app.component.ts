import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

   constructor(private _httpService: Http) { }
  apiValues: string[] = [];
  title = 'My CMS Cool App';

  ngOnInit() {
    this._httpService.get('http://localhost:55132/api/articles').subscribe(values => {
      this.apiValues = values.json() as string[];
     
    });
  }
}
