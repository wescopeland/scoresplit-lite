import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { AppSession } from './models/app-session.model';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<AppSession> {
  constructor(protected store: SessionStore) {
    super(store);
  }
}
