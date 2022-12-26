import type Role from "@/model/Role";
import type { Gender } from "@/enums/Gender";

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
