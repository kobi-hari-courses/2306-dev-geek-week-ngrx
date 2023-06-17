import { Directive } from "@angular/core";
import { MatTabLink } from "@angular/material/tabs";
import { RouterLinkActive } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Directive({
    selector: 'a[mat-tab-link]',
    standalone: true,
    hostDirectives: [
        {
            directive: RouterLinkActive, 
        }
    ]

})
export class NavItemDirective {
    constructor(
        private rla: RouterLinkActive, 
        private nav: MatTabLink) {
 
        rla.isActiveChange.pipe(
            takeUntilDestroyed()            
        ).subscribe(val => this.nav.active = val);

    }
}