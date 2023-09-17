import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleService } from 'src/app/services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-componentito2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentito2.component.html',
  styleUrls: ['./componentito2.component.scss'],
})
export class Componentito2Component {
  private exampleService: ExampleService = inject(ExampleService);
  data: User = { name: '' };
  $userSubject = this.exampleService.getUser();
}
