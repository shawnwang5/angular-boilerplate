import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class LayoutChildGuardService implements CanActivateChild {
    sideMenuActivePath = new Subject()

    constructor () {
    }

    canActivateChild (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.sideMenuActivePath.next(state.url)
        return true
    }
}
