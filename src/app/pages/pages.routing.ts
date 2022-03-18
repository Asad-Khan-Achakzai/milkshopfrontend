import { Routes } from '@angular/router';

import { MatIconComponent } from './material-icons/mat-icon.component';
import { TimelineComponent } from './timeline/timeline.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { HelperComponent } from './helper-classes/helper.component';
import { ItemComponent } from './item/item.component';
import { HotelComponent } from './hotel/hotel.component';
import { UserComponent } from './user/user.component';
import { SellerComponent } from './seller/seller.component';
import { ReportComponent } from './report/report.component';
import { SaleComponent } from './sale/sale.component';
import { StockComponent } from './stock/stock.component';
import { WaistageComponent } from './wastage/wastage.component';
import { IsAdmin } from '../web-services/guards/IsAdmin.guard';
import { ExpensesComponent } from './expenses/expenses.component';
import { PaymentComponent } from './payment/payment.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'item',
        component: ItemComponent,
        data: {
          title: 'Item',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Item' }
          ]
        }
      },
      {
        path: 'user',
        canActivate: [IsAdmin],
        component: UserComponent,
        data: {
          title: 'User',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'User' }
          ]
        }
      },
      {
        path: 'expense',
        component: ExpensesComponent,
        data: {
          title: 'Expense',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Expense' }
          ]
        }
      },
      {
        path: 'payment',
        component: PaymentComponent,
        data: {
          title: 'Payment',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Payment' }
          ]
        }
      },
      {
        path: 'seller',
        component: SellerComponent,
        data: {
          title: 'Seller',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Seller' }
          ]
        }
      },
      {
        path: 'icons/material',
        component: MatIconComponent,
        data: {
          title: 'Material Icons',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Material Icons' }
          ]
        }
      },
      {
        path: 'timeline',
        component: TimelineComponent,
        data: {
          title: 'Timeline',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Timeline' }
          ]
        }
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Invoice',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Invoice' }
          ]
        }
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: {
          title: 'Pricing',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Pricing' }
          ]
        }
      },
      {
        path: 'helper',
        component: HelperComponent,
        data: {
          title: 'Helper',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Helper' }
          ]
        }
      },
      {
        path: 'hotel',
        component: HotelComponent,
        data: {
          title: 'Buyer',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Buyer' }
          ]
        }
      },
      {
        path: 'sale',

        component: SaleComponent,

        data: {
          title: 'Sale',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Sale' }
          ]
        }
      },
      {
        path: 'waistage',
        component: WaistageComponent,
        data: {
          title: 'Wastge',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Wastge' }
          ]
        }
      },
      {
        path: 'stock',
        component: StockComponent,
        data: {
          title: ' Stock',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: ' Stock' }
          ]
        }
      },
      {
        path: 'report',
        component: ReportComponent,
        data: {
          title: 'Report',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Report' }
          ]
        }
      }
    ]
  }
];
