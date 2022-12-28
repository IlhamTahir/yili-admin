export type TokenRequest = {
  username: string;
  password: string;
};

export type ErrorResponse = {
  code: number;
  message: string;
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

export interface Editable<CreateModel, EditModel, T> {
  create(request: CreateModel): Promise<T>;

  edit(id: string, request: EditModel): Promise<T>;
}

export interface RoleCreateRequest {
  name: string;
  label: string;
  permission: Array<string>;
}

export interface RoleEditRequest {
  name: string;
  label: string;
  permission: Array<string>;
}

export interface TeacherCreateRequest {
  name: string;
}

export interface TeacherFilter extends Paging {
  name: string;
}

export type TeacherType = {
  id: string;
  name: string;
};
