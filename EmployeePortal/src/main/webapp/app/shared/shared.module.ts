import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmployeePortalSharedLibsModule, EmployeePortalSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EmployeePortalSharedLibsModule, EmployeePortalSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EmployeePortalSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeePortalSharedModule {
  static forRoot() {
    return {
      ngModule: EmployeePortalSharedModule
    };
  }
}
