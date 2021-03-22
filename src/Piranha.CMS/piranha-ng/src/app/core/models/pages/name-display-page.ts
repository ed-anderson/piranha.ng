import { FullNameRegion } from '../regions/full-name-region';

export interface NameDisplayPage {
  id: string;
  regions: {
    fullNameRegion: FullNameRegion;
  };
}
