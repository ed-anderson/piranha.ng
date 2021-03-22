import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { SelectItemPage } from 'src/app/core/models/pages/select-item-page';
import { CmsService } from 'src/app/core/services/cms/cms.service';

@Component({
  selector: 'app-selected-item-display',
  templateUrl: './selected-item-display.component.html',
  styleUrls: ['./selected-item-display.component.scss'],
})
export class SelectedItemDisplayComponent implements OnInit {
  data$: Observable<SelectItemPage> = this.route.data.pipe(
    mergeMap((data) => this.cmsService.getPageById(data.pageId))
  );

  constructor(private cmsService: CmsService, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
