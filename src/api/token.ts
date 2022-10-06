import request from "@/api/request";
import type { TokenRequest } from "@/api/types";

const createToken = (tokenRequest: TokenRequest): Promise<string> => {
  return request.post("/tokens", tokenRequest);
};

export default {
  createToken,
};
