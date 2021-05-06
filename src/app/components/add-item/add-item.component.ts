import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'tl-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  form: FormGroup;

  @Output() taskTitle$ = new EventEmitter();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  addTask() {
    if(this.form.valid) {
      this.taskTitle$.emit(this.form.value.task);
    }
    else {
      alert('Please task first');
    }

  }

}
