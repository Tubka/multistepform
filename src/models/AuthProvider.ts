export interface IAuthProvider {
  status: string;
  error: string | null;
  user: string | null;
  accessToken: string | '';
}