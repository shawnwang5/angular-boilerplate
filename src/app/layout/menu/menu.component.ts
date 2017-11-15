import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IAppState } from '../../store/models'
import { NgRedux } from '_@angular-redux_store@6.5.7@@angular-redux/store/lib/src'
import { LayoutChildGuardService } from '../layout-child-guard.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit, OnDestroy {
    activePath = ''
    menus = []
    subscriberArray = []

    constructor (private router: Router, private ngRedux: NgRedux<IAppState>, private layoutChildGuardService: LayoutChildGuardService) {
        this.initSubscriberArray()
    }

    ngOnInit () {
    }

    ngOnDestroy (): void {
        this.subscriberArray.forEach(item => item.unsubscribe())
    }

    initSubscriberArray () {
        this.subscriberArray.push(this.ngRedux.select('commons').subscribe(data => {
            this.menus = (<any>data).menus[ 'common' ]
            this.resetMenuStatus()
        }))
        this.subscriberArray.push(this.layoutChildGuardService.sideMenuActivePath.subscribe(targetURL => {
            this.activePath = <string>targetURL
        }))
    }

    resetMenuStatus () {
        this.activePath = this.router.url
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
