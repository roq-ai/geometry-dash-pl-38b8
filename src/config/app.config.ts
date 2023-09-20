interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Game Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Game Owner', 'Game Administrator', 'Game Developer'],
  tenantName: 'Company',
  applicationName: 'geometry dash platform ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read company information', 'Read user information', 'View menus', 'Book a table'],
  ownerAbilities: [
    'Manage new_table_zxqo',
    'Manage new_table_iwfb',
    'Manage new_table',
    'Manage user',
    'Manage company',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2e20bc2a-180f-4488-8f66-0acdd89e71c7',
};
