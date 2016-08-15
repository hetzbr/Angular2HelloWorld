///<reference path="../../typings/index.d.ts"/>
import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { RouterService } from './shared/router.service';
import { Navbar } from './Navbar/navbar.component';
@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
    `,
    directives: [Navbar, ROUTER_DIRECTIVES],
    providers: [ RouterService ]
})

export class AppComponent {}