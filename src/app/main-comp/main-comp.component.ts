import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {

  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  add(task: string) {
    this.taskList.push(task);
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task); //filtrujemy(usuwamy) elementy z listy które sa taskiem
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
  }
  constructor() { }

  ngOnInit() {
  }

}
