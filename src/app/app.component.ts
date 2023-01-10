import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task4';
  maxNumber: number = 3;
  nameInput: string = '';
  nameList: Array<string> = [];
  currentNumber: number = this.nameList.length;
  selectedFramework: string = 'angular';
  frameworks: string[] = ['vue', 'angular', 'react', 'node'];
  fullroom: boolean = true;

  add() {
    this.currentNumber++;
    this.nameList.push(`${this.nameInput} - likes ${this.selectedFramework}`);
    this.nameInput = '';
    this.selectedFramework = 'angular';
  }
  clearBtn() {
    this.nameList = [];
    this.currentNumber = 0;
  }
  removePerson(item: string) {
    this.nameList = this.nameList.filter((el) => el != item);
    this.currentNumber = this.nameList.length;
  }
  editBtn(item: string) {
    console.log(item);
  }
}
