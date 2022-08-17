enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const gusUser: User = {
  username: 'Gustavo',
  role: ROLES.ADMIN,
};
