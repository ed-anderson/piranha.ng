import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { NameDisplayPage } from 'src/app/core/models/pages/name-display-page';
import { CmsService } from 'src/app/core/services/cms/cms.service';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.scss'],
})
export class NameDisplayComponent implements OnInit {
  data$: Observable<NameDisplayPage> = this.route.data.pipe(
    mergeMap((data) => this.cmsService.getPageById(data.pageId))
  );

  constructor(private cmsService: CmsService, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
