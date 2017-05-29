import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { routes } from './app.routes';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationService } from './shared/authentication.service';
import { AuthGuard } from './shared/authgurad.service';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    CardViewComponent,
    ListViewComponent,
    CardContainerComponent,
    CardComponent,
    ListContainerComponent,
    ListItemComponent,
    SignInComponent,
    ProductManageComponent,
    ProductsTableComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthenticationService, AuthGuard, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
