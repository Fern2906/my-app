import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-controls',
  styleUrl: './controls.css',
  templateUrl: './controls.html',
})
export class Controls {
  sortByName = output<void>();
  sortById = output<void>();
  reverse = output<void>();

  onSortByName(): void {
    this.sortByName.emit();
  }

  onSortById(): void {
    this.sortById.emit();
  }

  onReverse(): void {
    this.reverse.emit();
  } 
}

