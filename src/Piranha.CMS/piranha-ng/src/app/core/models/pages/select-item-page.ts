import { SelectItemRegion } from '../regions/select-item-region';

export interface SelectItemPage {
  id: string;
  regions: {
    selectItemRegion: SelectItemRegion;
  };
}
