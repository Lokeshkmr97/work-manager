import { httpAxios } from "@/helper/httpAxios";

// this function is used for the calling of all api.

//  call user api.
export async function signUp(user) {
  const result = await httpAxios
    .post("api/users", user)
    .then((response) => response.data);

  return result;
}

export async function login(loginData) {
  const result = await httpAxios
    .post("api/login", loginData)
    .then((response) => response.data);
    return result;
}
