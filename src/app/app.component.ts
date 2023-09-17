import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentitoComponent, Componentito2Component } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterOutlet,
    ComponentitoComponent,
    Componentito2Component,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message = 'from app component';
  showComponentito2 = false;
  cd = inject(ChangeDetectorRef);

  constructor() {
    setTimeout(() => {
      this.showComponentito2 = true;
      this.cd.detectChanges();
    }, 4000);
  }
  handleClick() {
    this.message = 'clicked at the app component';
  }
}
