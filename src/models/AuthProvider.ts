interface IUser {
  username: string | null;
}

export interface IAuthProvider {
  status: string;
  error: string | null;
  user: IUser | null;
}