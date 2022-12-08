import type {
  ListResult,
  TeacherCreateRequest,
  TeacherFilter,
  TeacherType,
} from "@/api/types";
import request from "@/api/request";

const list = (filter: TeacherFilter): Promise<ListResult<TeacherType>> => {
  return request.get("/teachers", {
    params: filter,
  });
};

const create = (teacherCreateRequest: TeacherCreateRequest): Promise<TeacherType> => {
  return request.post("/teachers", teacherCreateRequest);
};

// Todo:
const edit = (
  id: string,
  teacherEditRequest: TeacherCreateRequest
): Promise<TeacherType> => {
  return request.post(`/teachers/${id}`, teacherEditRequest);
};

export default {
  list,
  create,
  edit,
};
