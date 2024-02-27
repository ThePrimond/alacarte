import { Account, ID } from "appwrite";
import client from "../config";
import { executeRequest } from "../../utils";

const account = new Account(client);

export const signUp = async (email: string, password: string) => {
  const [, err] = await executeRequest(
    account.create(ID.unique(), email, password)
  );
  return err;
};
