import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepagesComponent } from "./homepages/homepages.component";
import { PostPageComponent } from "./post-page/post-page.component";
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";

const routes: Routes = [
  { path: "", component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path:'', component: HomepagesComponent},
    {path:'post/:id', component: PostPageComponent}
  ] },
  {path:'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
