import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    githubRepositoryUrl = 'https://github.com/shawnwang5/angular-boilerplate'

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }
}
