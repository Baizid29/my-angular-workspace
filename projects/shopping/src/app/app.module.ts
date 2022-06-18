import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { SentenceCasePipe } from './pipes/sentencecase.pipe'

import { HomeComponent } from './components/Home_Component';
import { RegisterComponent } from './components/register/register.component';
import { NetflixHeaderComponent } from './netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './netflix/netflix-register/netflix-register.component';
import { NetflixIndexComponent } from './netflix/netflix-index/netflix-index.component';
import { OnedatabindingComponent } from './components/databinding/onedatabinding/onedatabinding.component';
import { TwodatabindingComponent } from './components/databinding/twodatabinding/twodatabinding.component';
import { bindingComponent } from './components/mvvm/binding.component';
import { ApibindComponent } from './components/apibind/apibind.component';
import { IfdemoComponent } from './directives/ifdemo/ifdemo.component';
import { IfalterComponent } from './directives/ifalter/ifalter.component';
import { ContentprojectionComponent } from './directives/contentprojection/contentprojection/contentprojection.component';
import { CntprojectionComponent } from './directives/cntprojection/cntprojection.component';
import { SwitchdemoComponent } from './directives/switchdemo/switchdemo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { NesteditrtComponent } from './components/fordemo/nesteditrt/nesteditrt.component';
import { IndexdemoComponent } from './components/fordemo/indexdemo/indexdemo.component';
import { TrackbyComponent } from './components/fordemo/trackby/trackby.component';
import { ClassComponent } from './components/attrdrtv/classdemo/class.component';
import { StyleComponent } from './components/attrdrtv/styledemo/style.component';
import { EventdemoComponent } from './components/eventbinding/eventdemo/eventdemo.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart/shoppingcart.component';
import { ParentComponent } from './components/cstmevnt/parent/parent.component';
import { ChildComponent } from './components/cstmevnt/child/child.component';
import { FatherComponent } from './components/cstmevent/father/father.component';
import { SonComponent } from './components/cstmevent/son/son.component';
import { ProductsComponent } from './components/cstmevntexmple/products/products.component';
import { FilterComponent } from './components/cstmevntexmple/filter/filter.component';
import { PipedemoComponent } from './pipes/pipedemo/pipedemo.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { PipesdemoComponent } from './pipes/pipesdemo/pipesdemo.component';
import { CaptchaService } from './service/captcha.service';
import { LoginComponent } from './components/login/login.component';
import { FakestoreapiComponent } from './components/fakestoreapi/fakestoreapi.component';
import { TemplateformComponent } from './components/forms/templateform/templateform.component';
import { FrmstatevalidComponent } from './components/forms/frmstatevalid/frmstatevalid.component';
import { FrminptstatevalidComponent } from './components/forms/frminptstatevalid/frminptstatevalid.component';
import { CstmvalidfrmComponent } from './components/forms/cstmvalidfrm/cstmvalidfrm.component';
import { ModelformComponent } from './components/forms/modelform/modelform.component';
import { FrmarrayComponent } from './components/forms/frmarray/frmarray.component';
import { ModelvalidfrmComponent } from './components/forms/modelvalidfrm/modelvalidfrm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    NetflixIndexComponent,
    OnedatabindingComponent,
    TwodatabindingComponent,
    bindingComponent,
    ApibindComponent,
    IfdemoComponent,
    IfalterComponent,
    ContentprojectionComponent,
    CntprojectionComponent,
    SwitchdemoComponent,
    FordemoComponent,
    NesteditrtComponent,
    IndexdemoComponent,
    TrackbyComponent,
    ClassComponent,
    StyleComponent,
    EventdemoComponent,
    ShoppingcartComponent,
    ParentComponent,
    ChildComponent,
    FatherComponent,
    SonComponent,
    ProductsComponent,
    FilterComponent,
    SentenceCasePipe,
    PipedemoComponent,
    SortingPipe,
    PipesdemoComponent,
    LoginComponent,
    FakestoreapiComponent,
    TemplateformComponent,
    FrmstatevalidComponent,
    FrminptstatevalidComponent,
    CstmvalidfrmComponent,
    ModelformComponent,
    FrmarrayComponent,
    ModelvalidfrmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [CaptchaService],
  // bootstrap: [HomeComponent]
  // bootstrap: [NetflixIndexComponent]
  // bootstrap: [RegisterComponent]
  // bootstrap: [OnedatabindingComponent]
  // bootstrap: [TwodatabindingComponent]
  // bootstrap: [bindingComponent]
  // bootstrap: [ApibindComponent]
  // bootstrap: [IfdemoComponent]
  // bootstrap:[IfalterComponent]
  // bootstrap:[ContentprojectionComponent]
  // bootstrap:[CntprojectionComponent]
  // bootstrap:[SwitchdemoComponent]
  // bootstrap:[FordemoComponent]
  // bootstrap:[NesteditrtComponent]
  // bootstrap:[IndexdemoComponent]
  // bootstrap:[TrackbyComponent]
  // bootstrap:[ClassComponent]
  // bootstrap:[StyleComponent]
  // bootstrap:[EventdemoComponent]
  // bootstrap:[ShoppingcartComponent]
  // bootstrap:[ParentComponent]
  // bootstrap:[FatherComponent]
  // bootstrap:[ProductsComponent]
  // bootstrap:[PipedemoComponent]
  // bootstrap:[PipesdemoComponent]
  // bootstrap:[LoginComponent]
  // bootstrap:[FakestoreapiComponent]
  // bootstrap:[TemplateformComponent]
  // bootstrap:[FrmstatevalidComponent]
  // bootstrap:[FrminptstatevalidComponent]
  // bootstrap:[CstmvalidfrmComponent]
  // bootstrap:[ModelformComponent]
  // bootstrap:[FrmarrayComponent]
  bootstrap:[ModelvalidfrmComponent]
})
export class AppModule { }
