import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss']
})
export class DashboardChildComponent implements OnChanges {
  @Input() text = '';
  @Output() textChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('DashboardChildComponent', changes);
  }

  handleClick() {
    this.text = 'Dashboard Text Changed By Child';
    this.textChange.emit(this.text);
  }
}
