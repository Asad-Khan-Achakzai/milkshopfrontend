import { MatPaginatorIntl } from "@angular/material/paginator";

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Item Per Page:';
  customPaginatorIntl.firstPageLabel = 'First Page';
  customPaginatorIntl.previousPageLabel = 'Previous Page';
  customPaginatorIntl.nextPageLabel = 'Next Page';
  customPaginatorIntl.lastPageLabel = 'Last Page';

  return customPaginatorIntl;
}