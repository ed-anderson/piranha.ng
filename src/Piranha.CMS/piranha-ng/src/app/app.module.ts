import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NameDisplayComponent } from './components/name-display/name-display.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedItemDisplayComponent } from './components/selected-item-display/selected-item-display.component';
import { CoreModule } from './core/core.module';
import { routesProviderFactory } from './core/factories/routes-provider.factory';
import { RoutesProviderService } from './core/services/routes-provider/routes-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    NameDisplayComponent,
    SelectedItemDisplayComponent,
    LandingPageComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: routesProviderFactory,
      deps: [Injector, RoutesProviderService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
