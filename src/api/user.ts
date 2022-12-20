import type { ListResult, UserFilter } from "@/api/types";
import type { UserCreateRequest } from "@/api/model/User";
import type User from "@/api/model/User";
import request from "@/api/request";

const me = (): Promise<User> => {
  return request.get("/users/me");
};

const list = (filter: UserFilter): Promise<ListResult<User>> => {
  return request.get("/users", {
    params: filter,
  });
};

const create = (userCreateRequest: UserCreateRequest): Promise<User> => {
  return request.post("/users", userCreateRequest);
};

// Todo:
const edit = (
  id: string,
  userEditRequest: UserCreateRequest
): Promise<User> => {
  return request.post(`/user/${id}`, userEditRequest);
};

export default {
  me,
  list,
  create,
  edit,
};
