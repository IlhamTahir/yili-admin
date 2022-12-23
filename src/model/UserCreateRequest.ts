import type User from "@/model/User";

export default interface UserCreateRequest
  extends Pick<Partial<User>, "id" | "username" | "nickname" | "roles"> {
  password?: string;
}
