import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ExampleService } from 'src/app/services';

@Component({
  selector: 'app-componentito',
  standalone: true,
  imports: [NgIf],
  templateUrl: './componentito.component.html',
  styleUrls: ['./componentito.component.scss'],
})
export class ComponentitoComponent {
  @Input({ required: true }) message = '';
  @Output() messageChange = new EventEmitter<string>();

  private exampleService = inject(ExampleService);

  setNewUserData(): void {
    this.exampleService.setUser({
      name: 'Componentito',
    });
  }
}
