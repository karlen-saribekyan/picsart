import { IUserResponse } from "./index.models";

export const USERS: IUserResponse[] = new Array(40).fill(null).map((_, i) => ({
  id: i + 1,
  firstName: "name" + i,
  lastName: "surname" + i,
  email: `user${i}@gmail.com`,
  age: 10 + i,
  address: "address" + i
}));
