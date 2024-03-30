import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  exports: [
    NavbarComponent,
  ]
})
export class SharedComponentsModule {
}
