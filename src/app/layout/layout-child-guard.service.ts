import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class LayoutChildGuardService implements CanActivateChild {
    constructor () {
    }

    canActivateChild (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true
    }
}
