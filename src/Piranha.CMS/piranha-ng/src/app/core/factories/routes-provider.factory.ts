import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesProviderService } from '../services/routes-provider/routes-provider.service';

export function routesProviderFactory(
  injector: Injector,
  routesProviderService: RoutesProviderService
): () => Promise<void> {
  return () => {
    return new Promise<void>(async (resolve) => {
      const routes = await routesProviderService.routes$.toPromise();
      const router = injector.get(Router);
      router.resetConfig(routes);
      console.info(router.config);
      resolve();
    });
  };
}
