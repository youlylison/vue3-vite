import service from "@/api/service";
import { LoginReq } from "./types";

/**
 * 登录
 */
export function login(data: LoginReq): any {
  return service({
    url: "/login",
    method: "post",
    data,
  });
}
