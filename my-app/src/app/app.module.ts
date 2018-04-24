import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ItemsModule } from './items/items.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { CollectionService } from './core/services/collection.service';
import { AppRoutingModule } from './app-routing.module';
import { ItemsRoutingModule } from './items/items-routing.module';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    NgbModule.forRoot(),
    SharedModule,
    ItemsModule,
    PageNotFoundModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
