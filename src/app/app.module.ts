import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CnsModulesComponent } from './cns-modules/cns-modules.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { SearchModuleComponent } from './cns-modules/search-module/search-module.component';
import { ModuleListComponent } from './cns-modules/module-list/module-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CnsModulesComponent,
    BaseFormComponent,
    SearchModuleComponent,
    ModuleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
