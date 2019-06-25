import { Moment } from 'moment';

export interface ICustomer {
  id?: number;
  name?: string;
  dateOfBirth?: Moment;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postalCode?: number;
}

export const defaultValue: Readonly<ICustomer> = {};
