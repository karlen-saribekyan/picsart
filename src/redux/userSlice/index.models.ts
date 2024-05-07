import { AxiosError } from "axios";

export interface IUserState {
  loading: boolean;
  user?: UserResponseModel;
  users?: UserResponseModel[];
  error?: AxiosError<string>;
}

export class UserResponseModel {
  public id?: number;
  public firstName?: string;
  public lastName?: string;
  public email?: string;
  public age?: number;
  public address?: string;

  constructor(props: UserResponseModel) {
    Object.assign(this, props);
  }
}
