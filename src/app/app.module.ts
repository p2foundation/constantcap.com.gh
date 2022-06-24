import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResearchComponent } from './pages/research/research.component';
import { ClientComponent } from './pages/client/client.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SecTradingComponent } from './pages/services/sec-trading/sec-trading.component';
import { FinCapMarketComponent } from './pages/services/fin-cap-market/fin-cap-market.component';
import { InvestResearchComponent } from './pages/services/invest-research/invest-research.component';
import { InvestAdvisoryComponent } from './pages/services/invest-advisory/invest-advisory.component';
import { StraAdvisoryComponent } from './pages/services/stra-advisory/stra-advisory.component';
import { PrincInvestmentComponent } from './pages/services/princ-investment/princ-investment.component';
import { TeamComponent } from './pages/corporate/team/team.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    CorporateComponent,
    ServicesComponent,
    ContactComponent,
    ResearchComponent,
    ClientComponent,
    NotFoundComponent,
    FaqComponent,
    SecTradingComponent,
    FinCapMarketComponent,
    InvestResearchComponent,
    InvestAdvisoryComponent,
    StraAdvisoryComponent,
    PrincInvestmentComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
