import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnimalCURDComponent } from './components/animal-curd/animal-curd.component';
// import { FarmCURDComponent } from './components/farm-curd/farm-curd.component';
// import { LiveStockCURDComponent } from './components/live-stock-curd/live-stock-curd.component';
// import { LiveStockEventsComponent } from './components/live-stock-events/live-stock-events.component';
// import { OffChainDBComponent } from './components/off-chain-db/off-chain-db.component';
// import { SupplyChainComponent } from './components/supply-chain/supply-chain.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'animal',
    component: AnimalCURDComponent
  },
  // {
  //   path: 'farm',
  //   component: FarmCURDComponent
  // },
  // {
  //   path: 'devices',
  //   component: LiveStockCURDComponent
  // },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent
  },
  // {
  //   path: 'events',
  //   component: LiveStockEventsComponent
  // },
  // {
  //   path: 'supplychain',
  //   component: SupplyChainComponent
  // },
  // {
  //   path: 'offchaindb',
  //   component: OffChainDBComponent
  // },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})


export class AppRoutingModule {}