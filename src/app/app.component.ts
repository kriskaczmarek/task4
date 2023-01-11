import { Component } from '@angular/core';

interface nameList {
  name: string;
  preference: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public max: number = 3;
  public name: string = '';
  public data: Array<nameList> = [];
  public preference: string = 'angular';
  public frameworks: Array<string> = ['vue', 'angular', 'react', 'node'];

  add() {
    if (this.name && this.preference) {
      this.data.push({
        name: this.name,
        preference: this.preference,
      });
    }
    this.name = '';
    this.preference = 'angular';
  }
  clearBtn() {
    this.data = [];
  }
  remove(item:nameList){
    this.data = this.data.filter(el=> el !== item)
  }
  edit(idx:number){
    const item = this.data[idx]
    this.name = item.name
    this.preference = item.preference
    this.remove(item)
  }
}
