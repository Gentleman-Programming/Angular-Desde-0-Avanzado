import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-componentito',
  standalone: true,
  imports: [NgIf],
  templateUrl: './componentito.component.html',
  styleUrls: ['./componentito.component.scss'],
})
export class ComponentitoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input({ required: true }) message = '';
  @Output() messageChange = new EventEmitter<string>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(
      'ngOnInit: 1- utilizar los valores de los inputs, 2- sincronizar con entidades externas'
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck, se ejecuta cada vez que algo cambia');
  }

  ngAfterContentInit() {
    console.log(
      'ngAfterContentInit, se ejecuta cuando el contenido del componente ha sido inicializado'
    );
  }

  ngAfterContentChecked() {
    console.log(
      'ngAfterContentChecked, se ejecuta cuando el contenido del componente ha sido chequeado o hay un cambio en el content'
    );
  }

  ngAfterViewInit() {
    console.log(
      'ngAfterViewInit, se ejecuta cuando el componente y todos sus hijos han sido inicializado'
    );
    this.message = 'from the componentito component at the ngAfterViewInit';
    this.messageChange.emit(this.message);
  }

  ngAfterViewChecked() {
    console.log(
      'ngAfterViewChecked, se ejecuta cuando el componente y todos sus hijos han sido chequeados'
    );
  }

  ngOnDestroy() {
    console.log(
      'ngOnDestroy, se ejecuta cuando se destruye el componente, para limpiar referencias a memoria'
    );
  }
}
