import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './index.page.html',
    styleUrls: [ './index.page.scss' ]
})
export class LoginPageComponent implements OnInit {
    valForm

    constructor (private fb: FormBuilder, private router: Router) {
    }

    ngOnInit () {
        document.body.scrollTop = 0
        this.valForm = this.fb.group({
            username: [ 'username', Validators.required ],
            password: [ '123456', Validators.required ]
        })
    }

    login () {
        this.router.navigate([ '/simpleUI/table' ])
        if (this.valForm.valid) {
        } else {
            Object.keys(this.valForm.controls).forEach(key => this.valForm.controls[ key ].markAsDirty())
        }
    }
}
