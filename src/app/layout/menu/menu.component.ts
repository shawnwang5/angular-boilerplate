import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LayoutChildGuardService } from '../layout-child-guard.service'
import { Store } from '@ngrx/store'
import { IAppState } from '../../store/app/model'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit, OnDestroy {
    activePath = ''
    menus = []
    subscriberArray = []
    app: any

    constructor (private router: Router, private layoutChildGuardService: LayoutChildGuardService,
                 private store: Store<IAppState>) {
        this.activePath = this.router.url
    }

    ngOnInit () {
        this.initSubscriberArray()
    }

    ngOnDestroy (): void {
        this.subscriberArray.forEach(item => item.unsubscribe())
    }

    initSubscriberArray () {
        this.subscriberArray.push(
            this.store.select('app').subscribe(appState => {
                this.menus = (<any>appState).menus || []
                this.resetMenuStatus()
            })
        )
        this.subscriberArray.push(
            this.layoutChildGuardService.sideMenuActivePath.subscribe(targetURL => {
                this.activePath = <string>targetURL
                this.resetMenuStatus()
            })
        )
    }

    resetMenuStatus () {
        this.menus.forEach(level1 => {
            if (this.activePath.indexOf(level1.path) === 0) {
                level1.isFolded = false
            }
        })
    }

    handleMenuItemClick (menuItem) {
        if (menuItem.type === 'level1' && menuItem.children && menuItem.children.length > 0) {
            menuItem.isFolded = !menuItem.isFolded
        } else {
            this.activePath = menuItem.path
            this.router.navigate([ menuItem.path ], { queryParams: menuItem.queryParams })
        }
    }
}
