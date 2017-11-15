import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgRedux } from '@angular-redux/store'

import { TranslatorService } from '../../core/translator/translator.service'
import { IAppState } from '../../store/models'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit, OnDestroy {
    constructor (private translatorService: TranslatorService, private ngRedux: NgRedux<IAppState>,
                 private router: Router) {
    }

    ngOnInit () {
    }

    ngOnDestroy (): void {
    }
}
