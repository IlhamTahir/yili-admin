import type Role from "@/model/Role";
import type { Gender } from "@/enums/Gender";

export interface User {
  id: string;
  username: string;
  nickname: string;
  gender?: Gender;
  roles: Role[];
  permissions: Array<string>;
  locked: boolean;
  enabled: boolean;
  createdTime?: Date;
  updatedTime?: Date;
}
export interface UserCreateRequest
  extends Pick<Partial<User>, "id" | "username" | "nickname" | "roles"> {
  password?: string;
}

export type UserEditRequest = Pick<
  Partial<User>,
  "id" | "username" | "nickname" | "roles"
>;
