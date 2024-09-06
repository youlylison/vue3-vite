interface LoginReq {
  userName: string;
  userPassword: string;
}

interface LoginRes {
  token: string;
}

export type { LoginReq, LoginRes };
