import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyItemComponent } from './my-item/my-item.component';
import { FooterComponent } from './footer/footer.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NewItemsComponent } from './new-items/new-items.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyItemComponent,
    FooterComponent,
    CreateNewComponent,
    EditItemComponent,
    NewItemsComponent,
    ViewDetailsComponent,
    ViewListsComponent,
    ContactSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'navbar', component: NavbarComponent},
      {path: 'myitem', component: MyItemComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'createnew', component: CreateNewComponent},
      {path: 'newitems', component: NewItemsComponent},
      {path: 'viewdetails', component: ViewDetailsComponent},
      {path: 'viewlists', component: ViewListsComponent},
      {path: 'contactseller', component: ContactSellerComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
