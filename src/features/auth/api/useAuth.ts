import { getParsedSecureItem, storeSecureItem } from "@shared/lib/asyncStorage";
import { LoginRequestParams, User } from "../typesAndData";
import { databaseRequest, loginRequest } from "./authRequests";
import useFlashMessage from "@shared/lib/flashMessage";
import { useAuthContext } from "../context/AuthContext";
import { addHttpToUrl } from "@shared/utils/urlHelpers";
import { modifyUserCompanyList } from "@shared/utils/modifyUserCompanies";

export const useAuth = () => {
  const { showError } = useFlashMessage();
  const { setCurrentUser } = useAuthContext();

  const login = async (params: LoginRequestParams) => {
    const uri = addHttpToUrl(params.url)
    try {
      const response = await loginRequest({
        ...params,
        url: uri
      });
      const companies = modifyUserCompanyList(response.user_companies)
      const user: User = {...response, baseUrl:uri, companies};
      storeSecureItem("user", JSON.stringify(user));
      setCurrentUser(user);
    } catch (e:any) {
      showError(e?.message);
    }
  };

  const logout = async () => {
    console.log("Loggin out");
  };

  const getDatabaseList = async (url: string) => {
    try {
      const list = await databaseRequest(addHttpToUrl(url));
      return list;
    } catch (e) {
      showError(e as string);
    }
  };
  return { login, logout, getDatabaseList };
};
