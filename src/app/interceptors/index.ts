
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatchItInterceptor } from './match-it-interceptor';

export const MATCH_IT_INTERCEPTOR_PROVIDER = [
  { provide: HTTP_INTERCEPTORS, useClass: MatchItInterceptor, multi: true }
];
