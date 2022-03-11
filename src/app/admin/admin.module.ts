import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";

@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: 'AdminLayoutComponent', children: []}])],
  exports: [RouterModule],
})
export class AdminModule {}
