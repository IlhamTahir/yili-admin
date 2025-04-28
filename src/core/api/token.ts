import request from "@/core/api/request";
import type { TokenRequest } from "@/core/api/types";

const createToken = (tokenRequest: TokenRequest): Promise<string> => {
  return request.post("/tokens", tokenRequest);
};

export default {
  createToken,
};
