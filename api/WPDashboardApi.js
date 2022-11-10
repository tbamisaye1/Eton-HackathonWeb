import apiClient from "./client";

const baseEndPoint = "/wpdashboard/";

const GetMobileAppGraphJsonData = (value) => {
  return apiClient.post(baseEndPoint + "GetMobileAppGraphJsonData", value);
};

const GetActionItemNotificationData = (value) => {
  return apiClient.post(baseEndPoint + "GetActionItemNotificationData", value);
};

export default {
  GetMobileAppGraphJsonData,
  GetActionItemNotificationData,
};
