export interface PageResponse {
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
  published: string;
  created: string;
  lastModified: string;
  permissions: string[];
  id: string;
  level: number;
  items: PageResponse[];
}
