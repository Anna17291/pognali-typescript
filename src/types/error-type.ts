export type ErrorType = {
  message: string[];
  response: {
    data: {
      message: string[];
      error: string;
      statusCode: number;
    };
  };
};
