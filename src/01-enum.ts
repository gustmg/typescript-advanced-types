export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

export const gusUser: User = {
  username: 'Gustavo',
  role: ROLES.ADMIN,
};
