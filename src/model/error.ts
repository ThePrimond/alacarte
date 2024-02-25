export type APError = {
  name: string;
  code: number;
  type: string;
  response: APResponse;
};

export type APResponse = {
  message: string;
  code: number;
  type: string;
  version: string;
};
