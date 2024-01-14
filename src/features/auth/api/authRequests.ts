import { OdooResponse } from "@shared/types/OdooTypes";
import axios from "axios";
import { ExpectedLoginReturn, LoginRequestParams } from "../typesAndData";

export async function loginRequest({
  url,
  db,
  username,
  password,
}: LoginRequestParams) {
  try {
    const response = await axios.post<OdooResponse<ExpectedLoginReturn>>(
      url + "/web/session/authenticate",
      {
        jsonrpc: "2.0",
        params: {
          db,
          login: username,
          password,
        },
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if ("error" in response.data) {
      throw new Error(response.data.error.data.message as string);
    }

    return response.data.result;
  } catch (e) {
    // If you don't want to catch the error here, you can remove this block entirely
    throw e;
  }
}

export async function databaseRequest(url: string) {
  const response = await axios.post<OdooResponse<string[]>>(
    url + "/web/database/list",
    {},
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  if ("result" in response.data) {
    return response.data.result;
  } else throw new Error("Invalid url");
}
