import { Component, Input } from '@angular/core';
import { Todo } from '@tutorial/data';

@Component({
  selector: 'tutorial-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent  {
  @Input() todos: Todo[] = [];




}
