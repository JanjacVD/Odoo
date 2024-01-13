import { createContext, useContext } from "react";
import { AuthContextInterface } from "../typesAndData";

const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    
  return (
  <AuthContext.Provider value={null}>
    {children}
  </AuthContext.Provider>);
};

export default AuthContextProvider

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("Auth context can be only accessed in a child component")
    }
    return context
}