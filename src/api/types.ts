export type TokenRequest = {
  username: string;
  password: string;
};

export type ErrorResponse = {
  code: number;
  message: string;
};

export type UserType = {
  id: string;
  username: string;
  nickname: string;
  roles: Array<string>;
  permissions: Array<string>;
};

export type RoleType = {
  id: string;
  name: string;
  label: string;
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

export interface RoleFilter extends Paging {
  name: string;
  label: string;
}

export interface Searchable<T> {
  list(filter: object): Promise<ListResult<T>>;
}

export interface Editable<R, T> {
  create(request: R): Promise<T>;

  edit(id: string, request: R): Promise<T>;
}

export interface UserCreateRequest {
  username: string;
  nickname: string;
  roles?: Array<string>;
}

export interface RoleCreateRequest {
  name: string;
  label: string;
  permission: Array<string>;
}
