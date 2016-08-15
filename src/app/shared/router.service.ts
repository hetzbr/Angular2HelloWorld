import { Injectable } from '@angular/core';
import { RouteInfo, MenuType } from './router.metadata';

export const ROUTES_BS4: RouteInfo[] = [
    { path: '', title: "Benjamin Hetzer", menuType: MenuType.BRAND },
    { path: 'hello', title: "Hello World", menuType: MenuType.RIGHT},
    { path: 'about', title: "about", menuType: MenuType.RIGHT },
    { path: 'contact', title: "contact", menuType: MenuType.RIGHT},
];

@Injectable()
export class RouterService {
    constructor() {}

    public getRoutes() : RouteInfo[] {
        return ROUTES_BS4;
    }
}
