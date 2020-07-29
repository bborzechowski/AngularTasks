import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  encapsulation: ViewEncapsulation.None
})
// encapsulation: ViewEncapsulation.None -- globalne ustawienia css do wszystkich komponentów
// encapsulation: ViewEncapsulation..Emulated -- ustawienia css tylko w obrebie komponentu
export class TodoTaskComponent implements OnInit {

  @Input()
  taskListIn = [];

  @Output()
  emitDoneOut = new EventEmitter<string>();

  @Output()
  emitRemoveOut = new EventEmitter<string>();


  remove(task: string) {
    this.emitRemoveOut.emit(task);
  }

  done(task: string) {
    this.emitDoneOut.emit(task);
  }

  constructor() { }

  ngOnInit() {
  }

  getColor(): string{
    return this.taskListIn.length > 5 ? 'red' : 'green';
  }

}
