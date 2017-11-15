import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class LayoutChildGuardService implements CanActivateChild {
    sideMenuActivePath = new Subject()
    constructor () {
    }

    canActivateChild (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.sideMenuActivePath.next(state.url)
        return true
    }
}
