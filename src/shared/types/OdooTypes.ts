export type OdooResponse<T> = OdooSuccessResponse<T> | OdooErrorResponse;

type OdooSuccessResponse<T> = {
  result: T;
};

type OdooErrorResponse = {
  error: {
    data: {
      message: string;
    };
  };
};

export type OneToMany = [number, string];
