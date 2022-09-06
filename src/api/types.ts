export type TokenRequest = {
  username: string;
  password: string;
};

export type ErrorResponse = {
  code: number;
  message: string;
};

export type UserType = {
  username: string;
  nickname: string;
  roles: Array<string>;
  permissions: Array<string>;
};

export interface Paging {
  page?: number;
  size?: number;
  total?: number;
}

export type ListResult<T> = {
  paging: Paging;
  data: Array<T>;
};

export interface UserFilter extends Paging {
  name: string;
}
