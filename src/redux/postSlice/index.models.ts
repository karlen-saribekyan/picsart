import { AxiosError } from "axios";

export interface IPostState {
  loading: boolean;
  posts?: IPostUIResponse[];
  error?: AxiosError<string>;
}

export type IPostUIResponse = Omit<IPostResponse, "userId">;

export interface IPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}
