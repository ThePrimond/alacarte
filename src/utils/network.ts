export const executeRequest = async <T>(
  call: Promise<T>
): Promise<[Awaited<T> | null, unknown]> => {
  try {
    const response = await call;
    return [response, null];
  } catch (error) {
    console.log(error);
    return [null, error];
  }
};
