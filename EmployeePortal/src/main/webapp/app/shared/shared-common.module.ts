import { NgModule } from '@angular/core';

import { EmployeePortalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [EmployeePortalSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [EmployeePortalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EmployeePortalSharedCommonModule {}
