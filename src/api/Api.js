import axios from "axios";

const api = axios.create({
  baseURL: "https://mind-web-series-restapi.herokuapp.com/",
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

export function loginUser(data) {
  return api.post(`/user/login`, { ...data });
}
export function signup(data) {
  return api.post(`/user/register1`, { ...data });
}
export function signupEmail(data) {
  return api.patch(`/user/register2`, { ...data });
}

export function addJournal(data) {
  return api.post(`/journal/add`, { ...data }, config);
}
export function getProfile() {
  return api.get(`/user/profile`, config);
}
export function updateProfile(data) {
  return api.patch(`/user/update-profile`, { ...data }, config);
}
export function resetPassword(data) {
  return api.patch(`/user/send-verification-code`, { ...data }, config);
}
export function forgotPassword(data) {
  return api.patch(`/user/forget-password`, { ...data }, config);
}
