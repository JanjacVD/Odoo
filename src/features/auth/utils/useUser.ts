import { getParsedSecureItem } from "@shared/lib/asyncStorage";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../typesAndData";

export const useUser = (): [(User | null),Dispatch<SetStateAction<User|null>>] => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const storedUser = await getParsedSecureItem<User>("user");
        setUser(storedUser);
      } catch (e) {
        setUser(null);
      }
    };
    getUser();
  }, []);
  return [user, setUser];
};
