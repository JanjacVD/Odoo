import { OneToMany } from "@shared/types/OdooTypes";
import { required } from "@shared/validation/stringValidations";

export interface AuthContextInterface {
  user: User | null;
  isAuthenticated: boolean;
  setCurrentUser(user: User): void;
  removeUser(): void;
}
type UserContext = {
  lang: string;
  tz: string;
  uid: number;
};
export type User = {
  name: string;
  db: string;
  baseUrl: string;
  session_id: string;
  server_version: string;
  user_context: UserContext;
  //   csrf_token: string;
  companies: { id: number; name: string }[] | false;
};

export type ExpectedLoginReturn = {
  name: string;
  session_id: string;
  server_version: string;
  user_context: UserContext;
  db:string;
  user_companies:
    | {
        allowed_companies: OneToMany[] | {[key:number|string]: {id:number, name:string}};
      }
    | false;
};

export type LoginRequestParams = {
  url: string;
  db: string;
  username: string;
  password: string;
};

export const DEFAULT_LOGIN_FORM = {
    url:"",
    username:"",
    password:"",
    db:"",
}
export type AuthForm = typeof DEFAULT_LOGIN_FORM

export const authFormValidationRules = {
  username: (value:string) => required(value) ? null: "Username is required",
  password: (value:string) => required(value) ? null: "Password is required",
  db: (value:string) => required(value) ? null: "Database is required",
  url: (value:string) => required(value) ? null: "Url is required",
}