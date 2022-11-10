import apiClient from "./client";

const baseEndPoint = "/tdhradmin/";

const listOfConcernSpot = (value) => {
  return apiClient.post(baseEndPoint + "JSON_TroubleSpotReport", value);
};

const listOfMemosByUser = (value) => {
  return apiClient.post(baseEndPoint + "JSON_GetMyMemosByUserFK", value);
};

const removeMemoFromMobile = (value) => {
  return apiClient.post(
    baseEndPoint + "JSON_SetMemoToInvisibleOnMobile",
    value
  );
};

export default {
  listOfConcernSpot,
  listOfMemosByUser,
  removeMemoFromMobile,
};
