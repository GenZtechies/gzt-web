import $http from "./xhr";

export const authLogin = async (data: any) => await $http.post("/auth/login", data);
export const authRegister = async (data: any) => await $http.post("/auth/register", data);

export const userGetMe = async () => await $http.get(`/users/me`);
