import { Injectable } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import config from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getConfig(): { params: HttpParams } {
    const params = new HttpParams()
      .set('developer', config.developer);
    return {
      params,
    };
  }
}
