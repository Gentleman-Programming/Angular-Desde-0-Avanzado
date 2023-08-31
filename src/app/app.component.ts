import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentitoComponent } from './componentito/componentito.component';
import { HighlightDirective, UnlessDirective } from './directives';

interface ArreglitoItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterOutlet,
    ComponentitoComponent,
    HighlightDirective,
    UnlessDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message = 'from app component';
  condition = false;
  selectedOption = 'uno';
  options = ['uno', 'dos', 'tres'];
  arreglito: ArreglitoItem[] = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
  ];

  trackByFn(item: any) {
    return item.id;
  }

  handleClick() {
    this.message = 'clicked at the app component';
  }
}
