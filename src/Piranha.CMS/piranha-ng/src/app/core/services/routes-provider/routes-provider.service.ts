import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { map } from 'rxjs/operators';
import pageTypeToComponentMap from '../../maps/page-type-to-component.map';
import { Page } from '../../models/page';
import { CmsService } from '../cms/cms.service';
import { staticRoutes } from './static-routes';

@Injectable({
  providedIn: 'root',
})
export class RoutesProviderService {
  private readonly _sitemap$ = this.cmsService.getSitemap();
  readonly routes$ = this._sitemap$.pipe(
    map((pages) => this.buildRoutes(pages))
  );

  constructor(private cmsService: CmsService) {}

  private buildRoutes(pages: Page[]): Routes {
    const flattenedPages = this.flattenPages(pages);
    return flattenedPages
      .map((page) => this.mapPageToRoute(page))
      .concat(staticRoutes);
  }

  private flattenPages(pages: Page[]): Page[] {
    let flattenedPages: Page[] = [];

    pages.forEach((page) => {
      flattenedPages.push(page);

      if (page.items.length) {
        flattenedPages = flattenedPages.concat(this.flattenPages(page.items));
      }
    });

    return flattenedPages;
  }

  private mapPageToRoute(page: Page): Route {
    return {
      path: this.processPath(page.permalink),
      component: pageTypeToComponentMap.get(page.pageTypeName),
      data: { pageId: page.id },
    } as Route;
  }

  private processPath(url: string): string {
    return url[0] === '/' ? url.slice(1) : url;
  }
}
