export interface AuthContextInterface {
    user: User
}

export type User = {
  name: string;
  db: string;
  baseUrl: string;
  session_id: string;
  server_version: string;
  user_context: {
    lang: string;
    tz: string;
    uid: number;
  };
  //   csrf_token: string;
  companies: { id: number; name: string }[] | false;
};
