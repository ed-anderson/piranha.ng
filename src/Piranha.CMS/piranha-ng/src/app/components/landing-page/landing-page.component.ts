import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { LandingPage } from 'src/app/core/models/landing-page';
import { CmsService } from 'src/app/core/services/cms/cms.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  data$: Observable<LandingPage> = this.route.data.pipe(
    mergeMap((data) => this.cmsService.getPageById(data.pageId))
  );

  constructor(private cmsService: CmsService, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
