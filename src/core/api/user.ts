import type { ListResult, UserFilter } from "@/core/api/types";
import type { User, UserCreateRequest } from "@/core/model/User";
import request from "@/core/api/request";

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
  return request.put(`/users/${id}`, userEditRequest);
};

export default {
  me,
  list,
  create,
  edit,
};
