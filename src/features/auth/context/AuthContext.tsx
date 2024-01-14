import { createContext, useContext } from "react";
import { AuthContextInterface, User } from "../typesAndData";
import { useUser } from "../utils/useUser";

const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useUser();
  const isAuthenticated = user !== null;
  const setCurrentUser = (user: User) => setUser(user);
  const removeUser = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setCurrentUser, removeUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context can be only accessed in a child component");
  }
  return context;
};
