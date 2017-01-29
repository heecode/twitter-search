export class SearchResult {
  id: number;
  title: string = '';
  objectLink: string = '';
  thumbnailUrl: string = '';
  description: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
