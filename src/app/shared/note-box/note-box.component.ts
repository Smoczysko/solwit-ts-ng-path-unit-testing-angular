import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.css']
})
export class NoteBoxComponent {

  @Input() note: string = '';

  @Output() noteChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  get value (): string {
    return this.note;
  }

  set value (value: string) {
    this.note = value;
    this.noteChange.emit(this.note);
  }

  public onSave () {
    this.save.emit();
  }
}
