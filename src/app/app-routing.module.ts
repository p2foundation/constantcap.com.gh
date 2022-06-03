import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { TeamComponent } from './pages/corporate/team/team.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResearchComponent } from './pages/research/research.component';
import { FinCapMarketComponent } from './pages/services/fin-cap-market/fin-cap-market.component';
import { InvestAdvisoryComponent } from './pages/services/invest-advisory/invest-advisory.component';
import { InvestResearchComponent } from './pages/services/invest-research/invest-research.component';
import { PrincInvestmentComponent } from './pages/services/princ-investment/princ-investment.component';
import { SecTradingComponent } from './pages/services/sec-trading/sec-trading.component';
import { ServicesComponent } from './pages/services/services.component';
import { StraAdvisoryComponent } from './pages/services/stra-advisory/stra-advisory.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path: 'about-us', component: CorporateComponent},
  {path: 'team', component: TeamComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'sec-trading', component: SecTradingComponent},
  {path: 'fin-cap-market', component: FinCapMarketComponent},
  {path: 'stra-advisory', component: StraAdvisoryComponent},
  {path: 'princ-investment', component: PrincInvestmentComponent},
  {path: 'invest-research', component: InvestResearchComponent},
  {path: 'invest-advisory', component: InvestAdvisoryComponent},
  {path: 'client-center', component: ClientComponent},
  {path: 'research-center', component: ResearchComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'faq', component: FaqComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
