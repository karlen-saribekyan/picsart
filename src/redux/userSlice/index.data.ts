import { UserResponseModel } from "./index.models";

export const USERS: UserResponseModel[] = new Array(40).fill("").map(
  (_, i) =>
    new UserResponseModel({
      id: i + 1,
      firstName: "name" + i,
      lastName: "surname" + i,
      email: `user${i}@gmail.com`,
      age: 10 + i,
      address: "address" + i
    })
);
