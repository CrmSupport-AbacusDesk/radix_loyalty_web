import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MaterialModule } from 'src/app/material';
import { RouterModule } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AppUtilityModule } from 'src/app/app-utility.module';
import { MatIconModule, MatDialogModule } from '@angular/material';
import { AuthComponentGuard } from 'src/app/auth-component.guard'
import { RegistraionListComponent } from '../registraion-list/registraion-list.component';
import { RegistraionAddComponent } from '../registraion-add/registraion-add.component';

const warrentyregistraionRoutes = [
  {path:"", children:[
    { path: "", component: RegistraionListComponent,canActivate:[AuthComponentGuard], data:{ expectedRole: ['1']}},
    { path: "registration-add", component: RegistraionAddComponent,canActivate:[AuthComponentGuard], data:{ expectedRole: ['1']}},
  ]}
] 

@NgModule({
  declarations: [RegistraionListComponent,RegistraionAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(warrentyregistraionRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    MaterialModule,
    AutocompleteLibModule,
    MatIconModule,
    MatDialogModule,
    NgxMatSelectSearchModule,
    AppUtilityModule
    
  ]
})
export class WarrantyRegistrationModule { constructor(){
  console.log('this is warranty registraion module');
  
}
}
