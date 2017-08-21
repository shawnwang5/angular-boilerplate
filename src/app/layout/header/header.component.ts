import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import * as Cookies from 'js-cookie'
import { NgRedux } from '@angular-redux/store'

import { TranslatorService } from '../../core/translator/translator.service'
import { IAppState } from '../../store/IAppState'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit, OnDestroy {
    languageListForPage
    isLoginIn: boolean
    userInfo: object
    industryNodes
    subscriberArray = []

    constructor (private translatorService: TranslatorService, private ngRedux: NgRedux<IAppState>,
                 private router: Router) {
        this.languageListForPage = translatorService.getAvailableLanguages()
        this.subscriberArray.push(ngRedux.select('isLoginIn').subscribe(isLoginIn => this.isLoginIn = <boolean>isLoginIn))
        this.subscriberArray.push(ngRedux.select('userInfo').subscribe(userInfo => this.userInfo = userInfo))
        this.subscriberArray.push(ngRedux.select('industryNodes').subscribe(industryNodes => this.industryNodes = industryNodes))
    }

    ngOnInit () {
    }

    ngOnDestroy (): void {
        this.subscriberArray.forEach(item => item.unsubscribe())
    }

    handleLanguageListItemClick (currItem, indexInArray) {
        const newLanguageArray = [ currItem ]
        this.languageListForPage.forEach((item, index) => {
            if (index !== indexInArray) {
                newLanguageArray.push(item)
            }
        })
        this.languageListForPage = newLanguageArray
        this.translatorService.setCurrLanguage(currItem.value, newLanguageArray)
    }

    handleLogoutBtnClick () {
        Cookies.remove('userInfo')
        Cookies.remove('QYAuthorization')
        this.router.navigate([ '/home' ])
        window.setTimeout(() => {
            window.location.reload()
        }, 500)
    }
}
