import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  @Output()
  emitTaskOut = new EventEmitter<string>();

  add() {
    this.emitTaskOut.emit(this.newTask);
    this.newTask = ''; //ustawiamy pustego stringa w inpucie po wywołaniu metody
  }

  constructor() { }

  ngOnInit() {
  }

}
