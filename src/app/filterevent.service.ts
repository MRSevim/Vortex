import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltereventService {
  subject = new Subject();
  constructor() {}
  next(event: any) {
    this.subject.next(event);
  }
}
