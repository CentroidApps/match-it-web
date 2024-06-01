import {
	HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MatchItInterceptor implements HttpInterceptor {

	constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.headers.has('fileUpload')) {
			req = req.clone({
				headers: req.headers.delete('fileUpload')
			});
			req = req.clone({
				headers: req.headers.set('Accept', '*/*')
			});
		} else {
			if (!req.headers.has('Content-Type')) {
				req = req.clone({
					headers: req.headers.set('Content-Type', 'application/json')
				});
			}
		}

		req = req.clone({
			headers: req.headers.set('bypass-tunnel-reminder', '*')
		});

		return next.handle(req);
	}
}
