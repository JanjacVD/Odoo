import Auth from "@features/auth/Auth";
import AuthContextProvider from "@features/auth/context/AuthContext";

export default function Main() {
  return (
    <AuthContextProvider>
      <Auth />
    </AuthContextProvider>
  );
}
