import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from '../../models/page';
import { PageResponse } from '../../models/page.res';

@Injectable({
  providedIn: 'root',
})
export class CmsService {
  private readonly _apiBaseUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}

  getPageById(id: string): Observable<any> {
    return this.httpClient.get(`${this._apiBaseUrl}/pages`, {
      params: {
        id,
      },
    });
  }

  getSitemap(): Observable<Page[]> {
    return this.httpClient
      .get<PageResponse[]>(`${this._apiBaseUrl}/sitemap`)
      .pipe(map((res) => res.map((page) => this.mapPage(page))));
  }

  private mapPage(pageResponse: PageResponse): Page {
    const { created, lastModified, published, items, ...page } = pageResponse;
    return {
      ...page,
      created: new Date(created),
      lastModified: new Date(lastModified),
      published: new Date(published),
      items: items.map((item) => this.mapPage(item)),
    } as Page;
  }
}
