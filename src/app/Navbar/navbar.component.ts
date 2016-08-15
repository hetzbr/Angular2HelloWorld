import { Component, OnInit, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RouterService } from '../shared/router.service';
import { MenuType, RouteInfo  } from '../shared/router.metadata';
@Component({
    moduleId: module.id,
    selector: 'navbar',
    properties: ['routes'],
    templateUrl: './navbar.component.html',
    styles: [
        `
    .nav-link {
      color: #eee !important;
    }
    `
    ],
    directives: [ROUTER_DIRECTIVES]
})
export class Navbar implements OnInit {
    public menuItems: RouteInfo[];

    constructor(private routerService : RouterService ) {

    }

    ngOnInit() {
        this.menuItems = this.routerService.getRoutes().filter(menuItem => menuItem.menuType != null);
    }

    public getMenuItemClasses(menuItem: RouteInfo) {
        let menuItemClass = {
            "nav-item": menuItem.menuType === MenuType.LEFT || menuItem.menuType === MenuType.RIGHT,
            "pull-xs-right": menuItem.menuType === MenuType.RIGHT
        }
        return menuItemClass;
    }

    public getMenuItemAnchorClasses(menuItem: RouteInfo) {
        let menuItemAnchorClass = {
            "navbar-brand": menuItem.menuType === MenuType.BRAND,
            "nav-link": menuItem.menuType === MenuType.LEFT || menuItem.menuType === MenuType.RIGHT
        }
        return menuItemAnchorClass;
    }
}