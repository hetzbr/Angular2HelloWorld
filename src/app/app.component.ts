///<reference path="../../typings/index.d.ts"/>
import {Component} from '@angular/core';
import {HelloWorldComponent} from './HelloWorld/hello.component';
@Component({
    selector: 'my-app',
    template: `<hello-world></hello-world>`,
    directives: [HelloWorldComponent]
})

export class AppComponent {}