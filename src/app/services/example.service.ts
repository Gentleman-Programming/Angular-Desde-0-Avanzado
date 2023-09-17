import { Injectable } from '@angular/core';
import { User } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

// Singleton
@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private $dataSubject = new BehaviorSubject<User>({ name: '' });

  // Observable -> unicast

  // Subject -> multicast

  // BehaviorSubject -> multicast / buffer

  private data: User = { name: 'Alan' };

  getUser(): Observable<User> {
    return this.$dataSubject.asObservable();
  }

  setUser(user: User): void {
    this.data = user;
    this.$dataSubject.next(this.data);
  }
}
