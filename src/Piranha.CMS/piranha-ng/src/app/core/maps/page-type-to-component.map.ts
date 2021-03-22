import { LandingPageComponent } from 'src/app/components/landing-page/landing-page.component';
import { NameDisplayComponent } from 'src/app/components/name-display/name-display.component';
import { SelectedItemDisplayComponent } from 'src/app/components/selected-item-display/selected-item-display.component';
import { PageType } from '../enums/page-type.enum';

const pageTypeToComponentMap = new Map();
pageTypeToComponentMap.set(PageType.Landing, LandingPageComponent);
pageTypeToComponentMap.set(PageType.NameDisplay, NameDisplayComponent);
pageTypeToComponentMap.set(PageType.SelectItem, SelectedItemDisplayComponent);

export default pageTypeToComponentMap;
