import apiClient from "./client";

const baseEndPoint = "/tdauth/";

const getUserList = () => apiClient.get(baseEndPoint + "GetUserList");

const verifyActivationCode = (activationCode) => {
  // console.log("baseEndPoint", baseEndPoint + "ActivateMobileApp");
  //   const data = new FormData();
  //   data.append("value", activationCode);
  return apiClient.post(
    baseEndPoint + "ActivateMobileApp",
    JSON.stringify(activationCode)
  );
};

const login = (userInfo) => {
  const endPoint = baseEndPoint + "JSON_CheckMobileLogin";
  // console.log("endPoint", endPoint);
  // console.log("username", username);
  // console.log("password", password);
  // console.log("companyPortal_Fk", companyPortal_Fk);
  // console.log("appVersion", appVersion);

  return apiClient.post(endPoint, userInfo);
};

//JSON_GetLandingPageData
const getLandingPageData = (userInfo) => {
  const endPoint = baseEndPoint + "JSON_GetLandingPageData";

  return apiClient.post(endPoint, userInfo);
};

export default {
  getUserList,
  getLandingPageData,
  login,
  verifyActivationCode,
};
