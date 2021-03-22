export interface Page {
  originalPageId: string;
  parentId: string;
  sortOrder: number;
  title: string;
  navigationTitle: string;
  metaIndex: boolean;
  metaPriority: number;
  menuTitle: string;
  pageTypeName: string;
  permalink: string;
  isHidden: boolean;
  published: Date;
  created: Date;
  lastModified: Date;
  permissions: string[];
  id: string;
  level: number;
  items: Page[];
}
