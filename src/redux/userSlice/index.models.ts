import { AxiosError } from "axios";

export interface IUserState {
  loading: boolean;
  user?: IUserResponse;
  users?: IUserResponse[];
  error?: AxiosError<string>;
}

export interface IUserResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  address: string;
}
