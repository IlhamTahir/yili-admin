import type Role from "@/api/model/Role";
import type { Gender } from "@/enums/Gender";
import User from "@/api/user";

export default interface User {
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
