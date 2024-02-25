import { APError } from "../model";

export const executeRequest = async <T>(
  call: Promise<T>
): Promise<[Awaited<T> | null, APError | null]> => {
  try {
    const response = await call;
    return [response, null];
  } catch (error) {
    return [null, error as APError];
  }
};
