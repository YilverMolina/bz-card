import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { BzCardComponent } from './bz-card/bz-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BzCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent],
  entryComponents: [
    BzCardComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(BzCardComponent, { injector: this.injector });
    customElements.define('bz-card', el);
  }
}