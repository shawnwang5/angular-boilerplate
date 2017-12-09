import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { TranslatorService } from '../../core/translator/translator.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit, OnDestroy {
    constructor (private translatorService: TranslatorService, private router: Router) {
    }

    ngOnInit () {
    }

    ngOnDestroy (): void {
    }
}
