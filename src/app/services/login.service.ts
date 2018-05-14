import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable()
export class LoginService {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  isActiveSession(): boolean {
    const isActiveSession = this.storage.get('isActiveSession');
    return isActiveSession;
  }

}
