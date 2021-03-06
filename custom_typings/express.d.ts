declare namespace Express {
  interface Request {
    token: string | null;
    user: import("../src/utils/types").UserTypeForToken | null;
  }
}
