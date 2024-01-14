import { useAuthContext } from "@features/auth/context/AuthContext";
import axios from "axios";

export const useAxiosInstance = () => {
  const { user } = useAuthContext();
  const instance = axios.create({
    baseURL: user.baseUrl + "/web/dataset/call_kw",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Openerp": user.session_id,
    },
  });
  return { instance };
};
