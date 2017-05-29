import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './shared/authgurad.service';
import { ProductManageComponent } from './product-manage/product-manage.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent, children: [
        {path: '', component: MenubarComponent, children: [
            {path: 'cardView', component: CardViewComponent, canActivate: [AuthGuard]},
            {path: 'listView', component: ListViewComponent, canActivate: [AuthGuard]},
            {path: 'manageProducts', component: ProductManageComponent, canActivate: [AuthGuard]},
            {path: 'signin', component: SignInComponent}
        ]}
    ]},
];

export const routes = RouterModule.forRoot(appRoutes, {useHash: false});