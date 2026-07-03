export const ROLES = {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER',
  AGENT: 'AGENT',
}

export const DASHBOARD_PATH_BY_ROLE = {
  [ROLES.ADMIN]: '/admin',
  [ROLES.CUSTOMER]: '/customer',
  [ROLES.AGENT]: '/agent',
}
